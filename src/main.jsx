<<<<<<< Updated upstream
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "sonner";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
=======
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { Toaster } from 'sonner';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext.jsx';
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
<<<<<<< Updated upstream
    <Toaster richColors />
    <App></App>
=======
    <AuthProvider>
      <Toaster richColors/>
      <App></App>
    </AuthProvider>
>>>>>>> Stashed changes
  </BrowserRouter>
);
