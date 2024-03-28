"use server";

import EmailTemplate from "@/utils/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const sendEmail = async (formData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const response = await resend.emails.send({
      from: "AvoCode <onboarding@resend.dev>",
      to: process.env.MY_EMAIL,
      subject: "Email From Portfolio",
      reply_to: email,
      react: EmailTemplate({ name: name, message: message }),
    });

    return JSON.parse(response);
  } catch (error) {
    return error.toString();
  }
};
