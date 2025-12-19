import nodemailer from "nodemailer";
import validator from "email-validator";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // ✅ Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // ✅ Validate email properly
  if (!validator.validate(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // 📩 Email transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Message from ${name}`,
      text: `
      Name: ${name}
      Email: ${email}

      Message:
      ${message}
            `,
          });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
