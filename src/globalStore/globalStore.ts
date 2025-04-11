// dependencies
import { create } from "zustand";

// utils
import createSelectors from "@/utils/selectors";

type GlobalStore = {
  // sidebar
  isSidebarOpen: boolean;

  // modal
  ModalComponent: any;
  ModalCloseButton: React.FC | null;
  isModalOpen: boolean;
  closeModalCallback: () => void;
};

type GlobalActions = {
  // sidebar actions
  openSidebar: () => void;
  closeSidebar: () => void;

  // modal actions
  openModal: () => void;
  closeModal: () => void;
  setModalComponent: (component: any) => void;
  setModalCloseButton: (component: React.FC | null) => void;

  // reset global store
  resetGlobalStore: () => void;
};

const globalInitialState: GlobalStore = {
  isSidebarOpen: true,

  // modal
  ModalComponent: null,
  ModalCloseButton: null,
  isModalOpen: false,
  closeModalCallback: () => null,
};

const globalStore = create<GlobalStore & GlobalActions>((set) => ({
  ...globalInitialState,

  // modal actions
  openModal: () =>
    set({
      isModalOpen: true,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
    }),

  setModalComponent: (component) =>
    set({
      ModalComponent: component,
    }),

  setModalCloseButton: (component) =>
    set({
      ModalCloseButton: component,
    }),

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
