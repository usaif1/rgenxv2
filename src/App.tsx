// routes
import { PublicRoutes, PrivateRoutes } from "./routes";
import "./App.css";

function App() {
  const auth = false;

  if (!auth) {
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
