import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.js";

import "./scss/_normalize.scss";

import "./services/LoadData.js";

createRoot(document.getElementById("root")).render(<App />);
