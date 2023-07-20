import React from "react";
import "../hojas-de-estilo/Boton.css";

//componente Boton recibira como props un string para texto, un booleano para esBotonDeClic, y una funcion para manejarClic

function Boton({ texto, esBotonDeClic, manejarClic }){ //desestructuramos la props y extraemos la propiedad texto, esBotonDeClic y manejarClic
  return (
    <button 
      className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" } //operador ternario para determinar que boton esta siendo presionado y de acuerdo a esto
      //sera la funcion a la que se llamara para manejarClic
      onClick={manejarClic}>
      {texto}
    </button>
  )       
}

export default Boton; //con la exportacion por default solo podemos exportar un elemento del archivo, con
//la exportacion nombrada podemos exportar todos los elementos que especifiquemos