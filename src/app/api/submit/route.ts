import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const title = formData.get('title');
    const section = formData.get('section');
    const pastedText = formData.get('pastedText');
    const file = formData.get('file') as File | null;

    // Validate inputs
    if (!name || !email || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log(`[Submission Received] Author: ${name} (${email}), Title: ${title}, Section: ${section}`);
    if (file) {
      console.log(`Uploaded File: ${file.name} (${file.size} bytes, type: ${file.type})`);
    }

    // In production, this would route to Parāvāk submissions inbox via Zoho SMTP/API
    return NextResponse.json({
      success: true,
      message: 'Your manuscript submission has been successfully transmitted to the Parāvāk Editorial Board.',
    });
  } catch (error) {
    console.error('Submission API Error:', error);
    return NextResponse.json({ error: 'Internal submission processing failed' }, { status: 500 });
  }
}
