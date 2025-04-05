// routes
import { PublicRoutes } from "./routes";
import "./App.css";

function App() {
  const auth = false;

  if (!auth) {
    return (
      <main className="h-screen w-screen overflow-hidden flex flex-col">
        <PublicRoutes />
      </main>
    );
  }

  return <main>asdas</main>;
}

export default App;
