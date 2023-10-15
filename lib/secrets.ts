

export const getResendApiKey = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not defined. Please define it in your .env.local file."
    );
  }
  return apiKey;
};