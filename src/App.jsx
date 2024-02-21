import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Routers/Home';
import Detail from './Routers/Detail';
import Admi from './Routers/Admi';
import ListarProductos from './Routers/ListarProductos';
import PanelAdmi from './Components/PanelAdmi';


function App() {
  return (
    <div style={{backgroundColor: 'FFF9E1'}}> 
    
      <Routes>
          <Route path='/' element= {<Home/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='*' element={<h1>Page not found - Error 404</h1>}/>
          <Route path='/admi' element={<PanelAdmi/>}>
            {/* <Route path='/listar' element={<ListarProductos/>}/>
            <Route path='/agregar' element={<AgregarProductos/>}/> */}
          </Route>
          <Route path='/listar' element={<ListarProductos/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
