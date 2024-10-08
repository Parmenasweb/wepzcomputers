import nodemailer from "nodemailer";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services like Outlook, SMTP, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.BUSINESS_EMAIL, // Your business email where the form submissions go
      subject: `New Contact Form Submission from ${name}`,
      text: `Hello wepz,

You have received a new message from the contact form on your website.

Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: 

${message}

Please follow up with the individual as soon as possible.

Best regards,
Your Website Contact Form`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
