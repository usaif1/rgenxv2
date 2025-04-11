import { requestFactory } from "@/api/service";
import useCasesStore from "../store/useCasesStore";
import { Patient } from "@/modules/patient/types/patientTypes";

const { setPatientsList, stopLoader } = useCasesStore.getState();

const endpoints = {
  patientsList: "/patient/patientdetails",
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
      console.log(response.data);
      setPatientsList(response.data);
      return response.data;
    }
    return null;
  },
};
