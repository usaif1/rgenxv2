// import { usePatientStore } from "@/globalStore";
import { z } from "zod";

// const { phenotype } = usePatientStore.getState().formData;

export const patientFormSchema = z
  .object({
    // Patient Details
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    birthDate: z.string().min(1, "Birth date is required"),
    gender: z.string().min(1, "Gender is required"),
    height: z.string().optional(),
    email: z.string().email("Invalid email").optional(),
    phone: z.string().min(10, "Invalid phone number").optional(),
    sampleCollectionDate: z.string().min(1, "Collection date is required"),
    sampleReceiveDate: z.string().min(1, "Receive date is required"),

    // Family History
    motherAge: z.string().optional(),
    motherAgeConception: z.string().optional(),
    gestationCompleteWeek: z.string().optional(),
    birthWeight: z.string().optional(),
    motherDiseaseStatus: z.string().optional(),
    motherDiseaseDetails: z.string().optional(),
    fatherAge: z.string().optional(),
    fatherDiseaseStatus: z.string().optional(),
    fatherDiseaseDetails: z.string().optional(),
    otherInfo: z.string().optional(),

    // VCF Upload
    referenceGenome: z.string().min(1, "Reference genome is required"),
    // vcfFile: z
    //   .custom<File>()
    //   .refine((file) => !!file, "VCF file is required")
    //   .refine(
    //     (file) => file.size <= 10 * 1024 * 1024,
    //     "File must be under 10MB"
    //   ),

    // // Analysis Mode
    // analysisMode: z.string().min(1, "Analysis mode is required"),
    // phenotype: z.string().optional(), // we’ll conditionally require this below
  })
  .refine(
    (data) =>
      !data.sampleCollectionDate ||
      !data.sampleReceiveDate ||
      new Date(data.sampleReceiveDate) >= new Date(data.sampleCollectionDate),
    {
      message: "Sample receive date cannot be earlier than collection date",
      path: ["sampleReceiveDate"], // associate the error with this field
    }
  );
//   .refine(
//     (data) =>
//       data.analysisMode !== "phenotypeToGenotype" || phenotype?.length > 0,
//     {
//       path: ["phenotype"],
//       message: "Phenotype is required when using phenotype-to-genotype mode",
//     }
//   )
