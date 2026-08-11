import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";

import "./scss/_normalize.scss";

import "./services/AddTask.tsx";

createRoot(document.getElementById("root")).render(<App />);
