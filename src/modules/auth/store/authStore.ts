// dependencies
import { create } from "zustand";
import { Session } from "@supabase/supabase-js";

// utils
import createSelectors from "@/utils/selectors";
import { User } from "../types/authTypes";

type LoaderTypes = "auth/initial-load" | "auth/login";

type AuthStore = {
  // auth user
  authUser: User | null;

  authSession: Session | null;

  // loading states
  loaders: Record<LoaderTypes, boolean>;
};

type AuthStoreActions = {
  // set auth user
  setAuthUser: (data: User | null) => void;

  // set auth session
  setAuthSession: (session: Session | null) => void;

  // loader actions
  startLoader: (loaderType: LoaderTypes) => void;
  stopLoader: (loaderType: LoaderTypes) => void;

  // reset auth store
  resetAuthStore: () => void;
};

const authInitialState: AuthStore = {
  // auth user
  authUser: null,

  // auth session
  authSession: null,

  loaders: {
    "auth/initial-load": true,
    "auth/login": false,
  },
};

const authStore = create<AuthStore & AuthStoreActions>((set) => ({
  ...authInitialState,

  setAuthUser: (data) => set({ authUser: data }),

  setAuthSession: (session) =>
    set({
      authSession: session,
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
  resetAuthStore: () => set(authInitialState),
}));

export default createSelectors(authStore);
