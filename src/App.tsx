// routes
import { PublicRoutes, PrivateRoutes } from "./routes";
import { Toaster } from "react-hot-toast";
import ReactModal from "react-modal";

// store
import { useAuthStore, useGlobalStore } from "./globalStore";

// stules
import "./App.css";
import { useEffect } from "react";
import { LoaderPrimary } from "./components";
import LoaderSecondary from "./components/Loaders/LoaderSecondary";

function App() {
  const { authUser, loaders, setAuthUser, stopLoader } = useAuthStore();
  const { ModalComponent, ModalCloseButton, isModalOpen } = useGlobalStore();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("liu");

    if (loggedInUser) {
      setAuthUser(JSON.parse(loggedInUser));
    } else {
      setAuthUser(null);
    }

    stopLoader("auth/initial-load");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loaders["auth/initial-load"]) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoaderPrimary />
      </div>
    );
  }

  if (!authUser) {
    return (
      <main>
        <PublicRoutes />
        <Toaster />
      </main>
    );
  }

  return (
    <main>
      <PrivateRoutes />
      <Toaster
        position="top-center"
        toastOptions={{
          className: "font-semibold",
        }}
        containerStyle={{
          top: 50,
        }}
      />
      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={false}
        style={{
          content: {
            maxHeight: "80vh",
            height: "fit-content",
            alignSelf: "center",
            borderColor: "#787878",
            background: "#ffffff",
            width: "fit-content",
            margin: "auto",
          },
          overlay: {
            zIndex: 99,
            background: "rgba(24,24,27,0.52)",
          },
        }}
      >
        <div className="absolute top-2 right-2">
          {ModalCloseButton ? <ModalCloseButton /> : null}
        </div>

        <LoaderSecondary loaderText="Please Wait" />

        {ModalComponent ? <ModalComponent /> : null}
      </ReactModal>
    </main>
  );
}

export default App;
