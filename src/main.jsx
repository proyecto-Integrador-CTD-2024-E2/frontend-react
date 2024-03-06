import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { Toaster } from 'sonner';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Toaster richColors/>
      <App></App>
    </AuthProvider>
  </BrowserRouter>
);
