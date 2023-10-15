"use server";

import { formSchemaType } from "@/components/forms/contact-form";
import { getResendApiKey } from "@/lib/secrets";
import { getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";

export const sendEmail = async (props: formSchemaType) => {
  const resend = new Resend(getResendApiKey());
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: props.email as string,
      reply_to: props.email as string,
      subject: "Message from Portfolio",
      text: ((props.message as string) + "\n\n" + props.name) as string,
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
