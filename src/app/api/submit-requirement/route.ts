import { NextResponse } from "next/server";
import { enquirySchema, serviceOptions } from "@/lib/enquiry";
import { GoogleAuth } from "google-auth-library";
export const runtime = "nodejs";
const MAX_BYTES = 16000;
export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  if (origin) {
    let sameHost = false;
    try {
      const parsedOrigin = new URL(origin);
      // Next.js may reconstruct req.url with an internal hostname behind a proxy.
      // The browser's Host header identifies the actual public request destination.
      sameHost =
        ["https:", "http:"].includes(parsedOrigin.protocol) &&
        parsedOrigin.host === req.headers.get("host");
    } catch {
      /* Malformed origins are rejected below. */
    }
    if (!sameHost)
      return NextResponse.json(
        { error: "Please submit your enquiry from our website." },
        { status: 403 },
      );
  }
  if (!req.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { error: "Please send a valid enquiry." },
      { status: 415 },
    );
  if (Number(req.headers.get("content-length")) > MAX_BYTES)
    return NextResponse.json(
      { error: "Your message is too long." },
      { status: 413 },
    );
  let body: unknown;
  try {
    // Bound the stream as well as Content-Length, which can be missing or incorrect.
    const reader = req.body?.getReader();
    if (!reader)
      return NextResponse.json(
        { error: "Please enter your enquiry details." },
        { status: 400 },
      );
    const chunks: Uint8Array[] = [];
    let total = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BYTES) {
        await reader.cancel();
        return NextResponse.json(
          { error: "Your message is too long." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return NextResponse.json(
      { error: "Please send a valid enquiry." },
      { status: 400 },
    );
  }
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { error: "Please check your contact details and select a service." },
      { status: 400 },
    );
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  if (!spreadsheetId || !clientEmail || !privateKey)
    return NextResponse.json(
      {
        error:
          "The enquiry form is temporarily unavailable. Please email us directly.",
      },
      { status: 503 },
    );
  const data = parsed.data;
  try {
    const auth = new GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const client = await auth.getClient();
    // Preserve the existing 15-column spreadsheet layout. RAW keeps phone numbers and user text literal.
    const row = [
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name,
      data.company,
      data.phone,
      data.email || "",
      "",
      "",
      data.solutions
        .map((v) => serviceOptions.find((s) => s.value === v)!.label)
        .join(", "),
      "",
      "",
      "",
      "",
      "",
      data.requirements || "",
      "",
    ];
    await client.request({
      url: `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent("Sheet1!A:O")}:append`,
      method: "POST",
      params: { valueInputOption: "RAW" },
      data: { values: [row] },
      timeout: 15000,
      retry: false,
    });
    return NextResponse.json({ success: true });
  } catch {
    console.error("Enquiry could not be saved to Google Sheets.");
    return NextResponse.json(
      {
        error:
          "We couldn’t save your enquiry. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }
}
