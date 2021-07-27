import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var [usuario, setNome] = useState("");
  var [contraseña, setData] = useState("");


  function registro(evt) {
    alert("                                                                                                                                                                                                                                                  ALERTA:  Debido a la alta demanda de nuevos usuarios hacia la pagina, se ha establecido un limite de usuarios por dia, intentelo de nuevo para otro día");
  }

  function enviar(evt) {
    if (usuario === "Eric" && contraseña === "Proyecto") {
      window.location = "--------";
    } else {
      alert("Error en Usuario o Contraseña. Intenta de nuevo.");
    }
  }
  return (
    <div>
      <h1>Consulta.com</h1>
      <p>Para ingresar a la pagina es nesesario que inicie sesion</p>
      <p>
        <input
          placeholder="Usuario"
          onChange={(evt) => setNome(evt.target.value)}
        />
      </p>
      <p>
        <input
          placeholder="Contraseña"
          onChange={(evt) => setData(evt.target.value)}
        />
      </p>
      <button onClick={enviar}> Ingresar </button>
      <p></p><ul>
						<li><a href="https://llevatilde.es/imagetexts/f/ff/recu%C3%A9rdala.png">¿Olvidaste tu contraseña?<img src="https://image.flaticon.com/icons/png/512/16/16569.png" align="center" width="60" height="40" alt="yt" /></a></li>
            
					</ul>
      <button onClick={registro}>Registrase</button>
      <p>Cree un perfil para un personaje público, entretenimiento o un negocio.</p>
      <p2>Programado por: Eic Ivan Vazquez Ramirez</p2>
      <p2>Cecytem</p2>
      <p2>Seminario 601</p2>


      </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
