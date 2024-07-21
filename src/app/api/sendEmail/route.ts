import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';
// Handler for POST requests
export async function POST(req: NextRequest) {
  const { firstName, lastName, email, message } = await req.json();

  // Create a transporter object using SMTP transport.
  const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services or custom SMTP
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: process.env.OWNER_EMAIL, // The email address of the website owner
    subject: `Email from the fundraising User ${firstName} ${lastName}`,
    text: message,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
