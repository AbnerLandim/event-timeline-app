import { createRoot } from "react-dom/client";
import Timeline from "./components/timeline";
import "./index.css";

const App = () => (
  <div className="app__container">
    <header>
      <h2 className="roboto-bold">
        {"\u2728"} Timeline of events {"\u2728"}
      </h2>
    </header>
    <Timeline />
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
