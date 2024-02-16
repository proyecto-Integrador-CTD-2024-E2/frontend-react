import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Routers/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className=""> 
    
    <Header />
      <Routes>
          <Route path='/' element= {<Home/>}></Route>
      </Routes>
      <Footer />
    </div>
    






  );
}

export default App;
