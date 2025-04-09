// dependencies
import axios, { AxiosError } from "axios";

// factory function
import { requestFactory } from "@/api/service";

// store
import { usePatientStore } from "@/globalStore";

// types
import {
  AnalysisMode,
  CreateNewPatientPayload,
  Symptom,
} from "../types/patientTypes";
import { commonErrorHandler } from "@/utils/helper";

const endpoints = {
  createNewPatient: "/patient/insertpatient",
  getAllSymptoms: "/doctors/symptoms",
  getPatientData: "/patient/getpatientdata",
};

const { stopLoader, setSymptoms } = usePatientStore.getState();

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
      config: { timeout: 1000 },
      onError: () => commonErrorHandler("Failed to fetch symptoms"),
    });

    if (response.success) {
      setSymptoms(response.data as Symptom[]);
      return response;
    }

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
      console.log("patient date", response.data);
      return response;
    }

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
        console.log("Metadata uploaded", response.data);
        return response.data;
      }

      return null;
    } catch (error) {
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
          return uploadedCSVLink["G2P Filtered"];
        } else {
          return uploadedCSVLink["P2G Filtered"];
        }
      }

      return null;
    } catch (error) {
      commonErrorHandler("Failed to process VCF File. Please try again");
      console.log("Error processing VCF", error);
      return null;
    }
  },
};
