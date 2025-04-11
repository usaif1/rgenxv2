// src/globalStore/useCasesStore.tsx

import { create } from "zustand";
import createSelectors from "@/utils/selectors";
import { Patient } from "@/modules/patient/types/patientTypes";

type LoaderTypes = "cases/patientDetails" | "cases/patientList";

type CasesStore = {
  // current patient details
  currentPatient: Patient | null;

  // list of patients
  patientsList: Patient[];

  // loading states
  loaders: Record<LoaderTypes, boolean>;
};

type CasesStoreActions = {
  // store actions
  setCurrentPatient: (data: Patient | null) => void;
  setPatientsList: (data: Patient[]) => void;
  resetCasesStore: () => void;

  // loader actions
  startLoader: (loaderType: LoaderTypes) => void;
  stopLoader: (loaderType: LoaderTypes) => void;
};

const casesInitialState: CasesStore = {
  currentPatient: null,
  patientsList: [],
  loaders: {
    "cases/patientDetails": false,
    "cases/patientList": false,
  },
};

const casesStore = create<CasesStore & CasesStoreActions>((set) => ({
  ...casesInitialState,

  // loader actions
  startLoader: (loaderType: LoaderTypes) =>
    set((state) => ({
      ...state,
      loaders: { ...state.loaders, [loaderType]: true },
    })),

  stopLoader: (loaderType: LoaderTypes) =>
    set((state) => ({
      ...state,
      loaders: { ...state.loaders, [loaderType]: false },
    })),

  // store actions
  setCurrentPatient: (data) => set({ currentPatient: data }),
  setPatientsList: (data) => set({ patientsList: data }),

  // reset store
  resetCasesStore: () => set(casesInitialState),
}));

const CasesStoreSelectors = createSelectors(casesStore);

export default CasesStoreSelectors;
