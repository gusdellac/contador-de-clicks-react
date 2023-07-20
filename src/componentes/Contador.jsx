import React from "react";
import "../hojas-de-estilo/Contador.css";

//componente Contador recibira como props el numClics, renderizara este valor y lo mostrara en la interfaz
function Contador({ numClics }){
  return(
    <div className="contador">
      {numClics}
    </div>
  );
}

export default Contador;