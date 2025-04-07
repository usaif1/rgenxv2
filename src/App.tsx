// routes
import { PublicRoutes, PrivateRoutes } from "./routes";

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
      </main>
    );
  }

  return (
    <main>
      <PrivateRoutes />
    </main>
  );
}

export default App;
