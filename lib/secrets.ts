

export const getResendApiKey = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not defined. Please define it in your .env.local file."
    );
  }
  return apiKey;
};

export const getBaseUrl = () => {
  const baseUrl = process.env.BASE_URL;
  if (!baseUrl) {
    throw new Error(
      "BASE_URL is not defined. Please define it in your .env.local file."
    );
  }
  return baseUrl;
}