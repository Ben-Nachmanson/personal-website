import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Use environment variables for security
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (!user || !pass) {
    return new Response("Email credentials not set.", { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: user,
      to,
      subject: `Contact Form Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return new Response("Message sent!", { status: 200 });
  } catch (err) {
    return new Response("Failed to send message.", { status: 500 });
  }
}
