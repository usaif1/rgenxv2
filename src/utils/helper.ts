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

export const getFileNameWithoutExtension = (url: string): string | null => {
  try {
    // Handle full URLs and file paths
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;
    const filename = pathname.split("/").pop() || "";

    // Split the filename and remove extension
    const parts = filename.split(".");
    if (parts.length > 1) {
      // Join all parts except the last one (the extension)
      return parts.slice(0, -1).join(".");
    }
    return filename;
  } catch {
    // Handle cases where input is not a valid URL
    const filename = url.split("/").pop() || "";
    const lastDotIndex = filename.lastIndexOf(".");
    return lastDotIndex === -1 ? filename : filename.slice(0, lastDotIndex);
  }
};

export function commonErrorHandler(errorText: string) {
  toast.error(errorText);
}

export const getResultFilesLinks = (fileLink: string | undefined) => {
  if (!fileLink)
    return {
      vep: "",
      filtered: "",
    };

  const parsedLinks = fileLink.match(/s3:\/\/[^\s,}]+/g);

  if (!parsedLinks)
    return {
      vep: "",
      filtered: "",
    };

  const VEPFile = parsedLinks.find((link) => link.includes("VEP"));
  const filteredFile = parsedLinks.find((link) => !link.includes("VEP"));

  return {
    vep: VEPFile ? getFileNameWithoutExtension(VEPFile) : "",
    filtered: filteredFile ? getFileNameWithoutExtension(filteredFile) : "",
  };
};
