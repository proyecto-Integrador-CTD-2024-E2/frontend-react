import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Routers/Home';

function App() {
  return (
    <div className="container mt-4"> 
    
      <Routes>
          <Route path='/' element= {<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
