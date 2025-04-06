// dependencies
import { create } from "zustand";

// utils
import createSelectors from "@/utils/selectors";

type GlobalStore = {
  // sidebar
  isSidebarOpen: boolean;
};

type GlobalActions = {
  // sidebar actions
  openSidebar: () => void;
  closeSidebar: () => void;

  // reset modal store
  resetGlobalStore: () => void;
};

const globalInitialState: GlobalStore = {
  isSidebarOpen: true,
};

const globalStore = create<GlobalStore & GlobalActions>((set) => ({
  ...globalInitialState,

  //sidebar actions
  openSidebar: () =>
    set({
      isSidebarOpen: true,
    }),
  closeSidebar: () =>
    set({
      isSidebarOpen: false,
    }),

  // reset address store
  resetGlobalStore: () => set(globalInitialState),
}));

export default createSelectors(globalStore);
