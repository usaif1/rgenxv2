// factory function
import { requestFactory } from "@/api/service";

// store
import { usePatientStore } from "@/globalStore";

// types
import { CreateNewPatientPayload, Symptom } from "../types/patientTypes";

const endpoints = {
  createNewPatient: "/patient/insertpatient",
  getAllSymptoms: "/doctors/symptoms",
};

const { stopLoader, setSymptoms } = usePatientStore.getState();

export const patientAPI = {
  createNewPatient: async (args: CreateNewPatientPayload) => {
    const response = await requestFactory.post({
      url: endpoints.createNewPatient,
      body: args,
      finallyCallback: () => {
        stopLoader("patient/new-patient");
      },
    });

    if (response.success) {
      return response;
    }

    return null;
  },

  fetchAllSymptoms: async () => {
    const response = await requestFactory.get({
      url: endpoints.getAllSymptoms,
    });

    if (response.success) {
      setSymptoms(response.data as Symptom[]);
      console.log("all symptoms", response.data);
      return response;
    }

    return null;
  },
};
