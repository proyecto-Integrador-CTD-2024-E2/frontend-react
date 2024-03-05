import "animate.css/animate.min.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Routers/Home";
import Detail from "./Routers/Detail";
import Admin from "./Routers/Admin";
import ListarProductos from "./Routers/ListarProductos";
import AgregarProductos from "./Routers/AgregarProductos";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "FFF9E1" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Navigate replace to="listar" />} />
          <Route path="listar" element={<ListarProductos />} />
          <Route path="agregar" element={<AgregarProductos />} />
        </Route>
        <Route path="*" element={<h1>Page not found - Error 404</h1>} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
