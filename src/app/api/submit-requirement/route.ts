import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Prepare authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        // Ensure private key newlines are parsed correctly
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ auth, version: 'v4' });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Missing GOOGLE_SHEET_ID environment variable.');
    }

    // Format the date
    const date = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Format solutions array to comma-separated string
    const solutions = Array.isArray(body.solutions) ? body.solutions.join(', ') : '';

    // Prepare the row data
    const row = [
      date,
      body.name || '',
      body.company || '',
      body.phone || '',
      body.email || '',
      body.city || '',
      body.website || '',
      solutions,
      body.industry || '',
      body.users || '',
      body.employees || '',
      body.branches || '',
      body.warehouses || '',
      body.requirements || '',
      body.contactMethod || '',
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:O',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true, message: 'Data submitted successfully' });
  } catch (error: any) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit data' },
      { status: 500 }
    );
  }
}
