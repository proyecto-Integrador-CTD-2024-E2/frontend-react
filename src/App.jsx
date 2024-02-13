import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css'

function App() {
  return (
    <div className="container mt-4"> 
      <h1>Hola mundo!!</h1>
      <p>inicio del proyecto integrador.</p>
      <div className="mb-2"> 
        <div className="mr-2"> 
          
          <button type="button" className="btn btn-success">Botón de éxito</button>
        </div>
        <div> 
          
          <button type="button" className="btn btn-primary btn-sm animate__animated animate__bounce">Animación</button>
        </div>
      </div>
    </div>
  );
}

export default App
