// routes
import { PublicRoutes, PrivateRoutes } from "./routes";

// store
import { useAuthStore } from "./globalStore";

// stules
import "./App.css";

function App() {
  const { authUser, loaders } = useAuthStore();

  if (loaders["auth/initial-load"]) {
    return <div>loading...</div>;
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
