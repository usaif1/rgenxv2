// routes
import { PublicRoutes, PrivateRoutes } from "./routes";
import "./App.css";

function App() {
  const auth = true;

  if (!auth) {
    return (
      <main className="h-screen w-screen overflow-hidden flex flex-col">
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
