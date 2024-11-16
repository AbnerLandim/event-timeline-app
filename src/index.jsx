import { createRoot } from "react-dom/client";
import timelineItems from "./timelineItems";

const App = () => (
  <div>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <h3>{timelineItems.length} timeline items to render</h3>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);