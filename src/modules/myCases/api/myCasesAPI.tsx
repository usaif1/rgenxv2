import { requestFactory } from "@/api/service";

// store
import useCasesStore from "../store/useCasesStore";

//types
import { Patient } from "@/modules/patient/types/patientTypes";

// utils
import { commonErrorHandler } from "@/utils/helper";

const { setPatientsList, stopLoader } = useCasesStore.getState();

const endpoints = {
  patientsList: "/patient/patientdetails",
  patientmedicalhistory: "patient/patientmedicalhistory",
  getfamily: "/doctors/getfamily",
};

export const myCasesAPI = {
  getAllPatients: async () => {
    const response = await requestFactory.get<Patient[]>({
      url: endpoints.patientsList,
      finallyCallback: () => {
        stopLoader("cases/patientList");
      },
    });

    if (response?.success) {
      setPatientsList(response.data);
      return response.data;
    }
    return null;
  },

  getPatientMedicalHistory: async function (puid: string) {
    const response = await requestFactory.get({
      url: endpoints.patientmedicalhistory,
      config: {
        headers: {
          patientguid: puid,
        },
      },
      onError: () => commonErrorHandler("Failed to fetch patient data"),
    });

    if (response.success) {
      return response;
    }

    return null;
  },

  getFamily: async function (puid: string) {
    const response = await requestFactory.get({
      url: endpoints.getfamily,
      config: {
        headers: {
          patientguid: puid,
        },
      },
      onError: () => commonErrorHandler("Failed to fetch patient data"),
    });

    if (response.success) {
      return response;
    }

    return null;
  },
};
