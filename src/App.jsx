// import 'bootstrap/dist/css/bootstrap.min.css';
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
import ListarUsuarios from "./Routers/ListarUsuarios";
import Resgistro from "./Routers/Registro";
import ListarCategorias from "./Routers/ListarCategorias";
import AgregarCategoria from "./Routers/AgregarCategoria";

function App() {
  return (
    <div
      className="pt-16 flex flex-col min-h-screen"
      style={{ backgroundColor: "FFF9E1" }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registro" element={<Resgistro />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Navigate replace to="listar-productos" />} />
          <Route path="listar-productos" element={<ListarProductos />} />
          <Route path="agregar-producto" element={<AgregarProductos />} />
          <Route path="agregar-producto/:id" element={<AgregarProductos />} />
          <Route path="listar-usuarios" element={<ListarUsuarios />} />
          <Route path="listar-categorias" element={<ListarCategorias />} />
          <Route path="agregar-categoria" element={<AgregarCategoria />} />
          <Route path="agregar-categoria/:id" element={<AgregarCategoria />} />
        </Route>
        <Route path="*" element={<h1>Page not found - Error 404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
