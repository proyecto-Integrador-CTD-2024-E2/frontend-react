import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "sonner";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster richColors />
    <App></App>
  </BrowserRouter>
);
