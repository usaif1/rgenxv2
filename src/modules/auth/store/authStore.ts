// dependencies
import { create } from "zustand";

// utils
import createSelectors from "@/utils/selectors";
import { User } from "../types/authTypes";

type LoaderTypes = "auth/initial-load" | "auth/login";

type AuthStore = {
  // auth user
  authUser: User | null;

  // loading states
  loaders: Record<LoaderTypes, boolean>;
};

type AuthStoreActions = {
  // reset modal store
  resetAuthStore: () => void;
  setAuthUser: (data: User) => void;

  // loader actions
  startLoader: (loaderType: LoaderTypes) => void;
  stopLoader: (loaderType: LoaderTypes) => void;
};

const authInitialState: AuthStore = {
  // auth user
  authUser: null,

  loaders: {
    "auth/initial-load": false,
    "auth/login": false,
  },
};

const authStore = create<AuthStore & AuthStoreActions>((set) => ({
  ...authInitialState,

  // loader actions
  startLoader: (loaderType: LoaderTypes) =>
    set((state) => {
      return { ...state, loaders: { ...state.loaders, [loaderType]: true } };
    }),

  stopLoader: (loaderType: LoaderTypes) =>
    set((state) => {
      return { ...state, loaders: { ...state.loaders, [loaderType]: false } };
    }),

  setAuthUser: (data) => set({ authUser: data }),

  // reset auth store
  resetAuthStore: () => set(authInitialState),
}));

export default createSelectors(authStore);
