import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(error: any) {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (
    typeof error === "object" &&
    error.message &&
    typeof error.message === "string"
  ) {
    message = error.message;
  } else if (error && typeof error === "string") {
  } else if (
    typeof error === "object" &&
    error.message &&
    typeof error.message !== "string"
  ) {
    message = JSON.stringify(error.message);
  } else if (error && typeof error === "string") {
    message = error;
  } else {
    message = "An Unknown error occurred";
  }
  return {
    error: message,
  };
}
