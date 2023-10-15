"use server";

import { formSchemaType } from "@/components/forms/contact-form";
import { getResendApiKey } from "@/lib/secrets";
import { getErrorMessage } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "@/emails/contact-form-email";

export const sendEmail = async (props: formSchemaType) => {
  const resend = new Resend(getResendApiKey());
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "saik98187@gmail.com",
      reply_to: props.email as string,
      subject: "Message from Portfolio",
      react: React.createElement(EmailTemplate, {
        name: props.name,
        email: props.email,
        message: props.message,
      }),
    });
    return {
      success: true,
    };
  } catch (error: unknown) {
    return {
      success: false,
      error: getErrorMessage(error).error,
    };
  }
};
