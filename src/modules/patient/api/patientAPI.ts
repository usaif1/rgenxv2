// dependencies
import axios, { AxiosError } from "axios";

// factory function
import { requestFactory } from "@/api/service";

// store
import { useGlobalStore, usePatientStore } from "@/globalStore";

// types
import {
  AnalysisMode,
  CreateNewPatientPayload,
  Symptom,
} from "../types/patientTypes";
import { commonErrorHandler } from "@/utils/helper";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

const endpoints = {
  createNewPatient: "/patient/insertpatient",
  getAllSymptoms: "/doctors/symptoms",
  getPatientData: "/patient/getpatientdata",
};

const { stopLoader, setSymptoms, setResultFiles } = usePatientStore.getState();
const { closeModal } = useGlobalStore.getState();

export const patientAPI = {
  createNewPatient: async function (args: CreateNewPatientPayload) {
    const response = await requestFactory.post({
      url: endpoints.createNewPatient,
      body: args,
      finallyCallback: () => {
        stopLoader("patient/new-patient");
      },
      onError: () => commonErrorHandler("Error creating patient"),
    });

    if (response.success) {
      return response;
    }

    return null;
  },

  fetchAllSymptoms: async function () {
    const response = await requestFactory.get({
      url: endpoints.getAllSymptoms,
      onError: () => commonErrorHandler("Failed to fetch symptoms"),
    });

    if (response.success) {
      setSymptoms(response.data as Symptom[]);
      return response;
    }
    closeModal();
    return null;
  },

  fetchPatientData: async function (guid: string) {
    const response = await requestFactory.get({
      url: endpoints.getPatientData,
      config: {
        headers: {
          patientguid: guid,
        },
      },
      onError: () => commonErrorHandler("Failed to fetch patient data"),
    });

    if (response.success) {
      return response;
    }

    closeModal();
    return null;
  },

  uploadVCF: async function (formData: any) {
    try {
      const response = await axios.post(
        import.meta.env.VITE_FILE_UPLOAD,
        formData
      );

      if (response.data.success) {
        return response.data;
      }

      return null;
    } catch (error) {
      closeModal();
      console.log("Error uploading VCF", error);
      console.log(
        "Error uploading VCF message",
        (error as AxiosError)?.message
      );
      commonErrorHandler("Failed to upload VCF File. Please try again");
      return null;
    }
  },

  uploadMetadataCSV: async function (formData: any) {
    const endpoint = import.meta.env.VITE_UPLOAD_METADATA;
    try {
      const response = await axios.post(endpoint, formData);

      if (response.data.success) {
        return response.data;
      }

      return null;
    } catch (error) {
      closeModal();
      console.error("Error uploading file:", error);
      commonErrorHandler("Failed to upload VCF File. Please try again");
      return null;
    }
  },

  processVCF: async function (
    s3FileLink: string,
    type: AnalysisMode,
    vguid: string
  ) {
    const endpoint = import.meta.env.VITE_PROCESS_VCF;

    try {
      const response = await axios.post(
        endpoint,
        {
          s3_input_path: s3FileLink,
        },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
            Connection: "keep-alive",
            "Content-Type": "application/json",
            Origin: "http://localhost:3000",
            Referer: "http://localhost:3000/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
          },
        }
      );

      const uploadedCSVLink = response?.data?.s3_file_links[vguid];

      if (uploadedCSVLink) {
        if (type === "genotype2phenotype") {
          const files = {
            filtered: uploadedCSVLink["G2P Filtered"],
            vep: uploadedCSVLink["VEP"],
          };
          setResultFiles(files);
          return files;
        } else {
          const files = {
            filtered: uploadedCSVLink["P2G Filtered"],
            vep: uploadedCSVLink["VEP"],
          };
          setResultFiles(files);
          return files;
        }
      }

      return null;
    } catch (error) {
      closeModal();
      commonErrorHandler("Failed to process VCF File. Please try again");
      console.log("Error processing VCF", error);
      return null;
    }
  },

  fetchProcessedFile: async function ({
    vguid,
    filename,
    fileExtension = "csv",
  }: {
    vguid: string;
    filename: string;
    fileExtension?: string;
  }) {
    try {
      const s3Client = new S3Client({
        region: import.meta.env.VITE_AWS_REGION,
        endpoint: import.meta.env.VITE_AWS_ENDPOINT,
        forcePathStyle: true,
        credentials: {
          accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
          secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
        },
      });

      const bucket = import.meta.env.VITE_PROCESSED_CSV_BUCKET;
      const folder = import.meta.env.VITE_PROCESSED_CSV_FOLDER;
      const key = `${folder}/${vguid}/${filename}.${fileExtension}`;

      const command = new GetObjectCommand({ Bucket: bucket, Key: key });
      const response = await s3Client.send(command);

      return response.Body?.transformToString();
    } catch (error) {
      console.log("Error fetching file", error);
      commonErrorHandler("Error fetching processed file");
      return null;
    }
  },
};
