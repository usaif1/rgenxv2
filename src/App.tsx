// routes
import { PublicRoutes, PrivateRoutes } from "./routes";
import { Toaster } from "react-hot-toast";

// store
import { useAuthStore } from "./globalStore";

// stules
import "./App.css";
import { useEffect } from "react";
import { LoaderPrimary } from "./components";

function App() {
  const { authUser, loaders, setAuthUser, stopLoader } = useAuthStore();

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
      <div className="w-scree h-screen flex items-center justify-center">
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
    </main>
  );
}

export default App;
