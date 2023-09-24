export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const extractYears = (startDate: Date, endDate: Date): string => {
  const startYear = startDate.getFullYear().toString();
  const endYear = endDate.getFullYear().toString();

  if (!endDate) {
    return `${startYear}`;
  }

  return `${startYear} - ${endYear}`;
};
