// dependencies
import toast from "react-hot-toast";

export const convertToCSV = (data: any) => {
  const headers = Object.keys(data).join(",") + "\n"; // Create header row

  const values =
    Object.values(data)
      .map(
        (value) =>
          Array.isArray(value) ? `"${value.join(",")}"` : `"${value}"` // Wrap arrays and other values in quotes
      )
      .join(",") + "\n"; // Create data row

  return headers + values;
};

export const getFileNameWithoutExtension = (url: string) => {
  // Extract the file name without extension using a regular expression
  const regex = /([^/]+)(?=\.\w+$|$)/;
  const match = url.match(regex);
  return match ? match[0] : null;
};

export function commonErrorHandler(errorText: string) {
  toast.error(errorText);
}
