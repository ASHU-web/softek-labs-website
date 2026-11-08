import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt = "Softek Labs — Make your next move a big one.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  const logo = await readFile(
    join(process.cwd(), "public/images/softek-brand-logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#f8f7f3",
        padding: "65px 75px",
        color: "#20221f",
        fontFamily: "sans-serif",
      }}
    >
      <img src={logoSrc} alt="Softek Labs" width={330} height={56} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 86,
          fontWeight: 700,
          letterSpacing: -4,
          lineHeight: 1.05,
        }}
      >
        <span>Make your next move</span>
        <span style={{ color: "#294cf3" }}>a big one.</span>
      </div>
      <div style={{ display: "flex", fontSize: 21, color: "#696b64" }}>
        ONLINE MARKETING · CONTENT · WHATSAPP · SOFTWARE · WEBSITES
      </div>
    </div>,
    size,
  );
}
