// dependencies
import { create } from "zustand";

// utils
import createSelectors from "@/utils/selectors";
import { PatientFormData } from "../types/patientTypes";

type LoaderTypes = "patient/new-patient";

type PatientStore = {
  // new patient form data
  formData: PatientFormData;

  // loading states
  loaders: Record<LoaderTypes, boolean>;
};

type PatientStoreActions = {
  setFormData: (name: string, value: string | File | null) => void;

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

    // // upload vcf
    // referenceGenome: "",
    // vcfFile: null,

    // analysis
    // analysisMode: "",
    // phenotype: "",
  },

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
