// dependencies
import { create } from "zustand";

// utils
import createSelectors from "@/utils/selectors";
import {
  PatientFormData,
  PatientMetadata,
  Symptom,
} from "../types/patientTypes";

type LoaderTypes = "patient/new-patient";

type PatientStore = {
  // new patient form data
  formData: PatientFormData;

  metadata: PatientMetadata;

  symptoms: Symptom[];
  selectedSymptoms: Symptom[];

  // loading states
  loaders: Record<LoaderTypes, boolean>;
};

type PatientStoreActions = {
  setFormData: (name: string, value: string | File | null) => void;

  setMetadata: (name: string, value: string | File | null) => void;

  setSymptoms: (symptoms: Symptom[]) => void;
  setSelectedSymptoms: (symptoms: Symptom[]) => void;

  // reset patient store
  resetPatientStore: () => void;

  // loader actions
  startLoader: (loaderType: LoaderTypes) => void;
  stopLoader: (loaderType: LoaderTypes) => void;
};

const patientInitialState: PatientStore = {
  // auth user
  formData: {
    // patient Details
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    height: "",
    weight: "",
    email: "",
    phone: "",
    sampleCollectionDate: "",
    sampleReceiveDate: "",

    // family history
    motherAge: "",
    motherAgeConception: "",
    gestationCompleteWeek: "",
    birthWeight: "",
    motherDiseaseStatus: "",
    motherDiseaseDetails: "",
    fatherAge: "",
    fatherDiseaseStatus: "",
    fatherDiseaseDetails: "",
    otherInfo: "",
  },

  metadata: {
    analysisMode: "",
    referenceGenome: "",
    vcfFile: null,
    hpoids: [],
  },

  symptoms: [],
  selectedSymptoms: [],

  loaders: {
    "patient/new-patient": false,
  },
};

const authStore = create<PatientStore & PatientStoreActions>((set) => ({
  ...patientInitialState,

  // new patient form actions
  setFormData: (name, value) =>
    set((state) => ({
      ...state,
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),

  setMetadata: (name, value) =>
    set((state) => ({
      ...state,
      metadata: {
        ...state.metadata,
        [name]: value,
      },
    })),

  setSymptoms: (allSymptoms) =>
    set({
      symptoms: allSymptoms,
    }),

  setSelectedSymptoms: (selected) =>
    set({
      selectedSymptoms: selected,
    }),

  // loader actions
  startLoader: (loaderType: LoaderTypes) =>
    set((state) => {
      return { ...state, loaders: { ...state.loaders, [loaderType]: true } };
    }),

  stopLoader: (loaderType: LoaderTypes) =>
    set((state) => {
      return { ...state, loaders: { ...state.loaders, [loaderType]: false } };
    }),

  // reset auth store
  resetPatientStore: () => set(patientInitialState),
}));

export default createSelectors(authStore);
