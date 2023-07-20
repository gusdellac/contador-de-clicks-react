import './App.css';
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  //funcion que incrementa el num de clicks en 1
  const incrementarContador = () => {
    setNumClics(numClics + 1);
  };

  //funcion que reiniciara el contador de clics en 0
  const reiniciarContador = () => {
    setNumClics(0);
  };

  //retornamos el componente app que a su vez renderizara los componentes de Contador y Boton
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={incrementarContador} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
