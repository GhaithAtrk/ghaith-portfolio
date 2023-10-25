'use server'

import nodemailer from "nodemailer";

const ContactAPI = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL,
      replyTo: email,
      subject: `Contact Form Submission From ${name}`,
      html: `
      <P>Name: ${name}</p>
      <P>Email: ${email}</p>
      <P>Message: ${message}</p>
      `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send the email.. Your message was not sent ",
    });
  }
};

export default ContactAPI;
