// routes
import { PublicRoutes, PrivateRoutes } from "./routes";
import { Toaster } from "react-hot-toast";
import ReactModal from "react-modal";

// supabase client
import supabaseClient from "@/api/client.supabase";

// store
import { useAuthStore, useGlobalStore } from "./globalStore";

// styles
import "./App.css";
import { useEffect } from "react";
import { LoaderPrimary } from "./components";

function App() {
  const { loaders, stopLoader, setAuthSession, authSession } = useAuthStore();
  const { ModalComponent, ModalCloseButton, isModalOpen } = useGlobalStore();

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setAuthSession(session);
      stopLoader("auth/initial-load");
    });
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setAuthSession(session);
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loaders["auth/initial-load"]) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoaderPrimary />
      </div>
    );
  }

  if (!authSession) {
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

        {ModalComponent ? <>{ModalComponent}</> : null}
      </ReactModal>
    </main>
  );
}

export default App;
