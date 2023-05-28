import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton({ texto, esBotonDeClic, manejarClic }){ //desestructuramos la props y extraemos la propiedad texto, esBotonDeClic y manejarClic
  return (
    <button 
      className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
      onClick={manejarClic}>
      {texto}
    </button>
  )       
}

export default Boton; //con la exportacion por default solo podemos exportar un elemento del archivo, con
//la exportacion nombrada podemos exportar todos los elementos que especifiquemos