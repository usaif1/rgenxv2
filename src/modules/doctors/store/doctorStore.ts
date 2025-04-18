// dependencies
import { create } from "zustand";

// utils
import createSelectors from "@/utils/selectors";

// types
import { Database } from "../../../../database.types";

type LoaderTypes = "doctor/fetch-current-doctor";

type DoctorStore = {
  // current patient details
  currentDoctor: Database["public"]["Tables"]["doctors"]["Row"] | null;

  // loading states
  loaders: Record<LoaderTypes, boolean>;
};

type DoctorStoreActions = {
  // store actions
  setCurrentDoctor: (
    data: Database["public"]["Tables"]["doctors"]["Row"] | null
  ) => void;

  resetDoctorStore: () => void;

  // loader actions
  startLoader: (loaderType: LoaderTypes) => void;
  stopLoader: (loaderType: LoaderTypes) => void;
};

const doctorInitialState: DoctorStore = {
  currentDoctor: null,
  loaders: {
    "doctor/fetch-current-doctor": true,
  },
};

const doctorStore = create<DoctorStore & DoctorStoreActions>((set) => ({
  ...doctorInitialState,

  // store actions
  setCurrentDoctor: (data) => set({ currentDoctor: data }),

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

  // reset store
  resetDoctorStore: () => set(doctorInitialState),
}));

export default createSelectors(doctorStore);
