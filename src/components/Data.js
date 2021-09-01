import React, { useEffect, useState } from "react";
import Units from "./Units";
import Tech from "./Tech";
import Bonus from "./Bonus";
import "../css/Card.css";

function Data(props) {
  //Se declara un array vacio para guardar las civulizaciones
  const [civiList, setciviList] = useState([]);

  //Mandamos la peticion con fetch a la url, guardamos en un response y extraemos la data
  useEffect(() => {
    fetch(props.urlCivi)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setciviList(data.civilizations);
      })
      .catch(() => {
        console.log("Salio un Error en Data");
      });
  }, []);
  return (
    <div className="card">
      {/* Mapeamos el arreglo civiList y guardamos en lista */}
      {civiList.map((lista) => {
        return (
          <div className="contenedor">
            <div>
              {/* Imprimimos el nombre */}
              <b>Nombre:</b> {lista.name}
            </div>

            <div>
              {/* Imprimimos en que version del juego salio */}
              <b>Version:</b> {lista.expansion}
            </div>

            {/* Imprimimos la(s) unidades especiales pasando la url 'unit' al componente Units*/}
            {lista.unique_unit.map((unit) => (
              <Units urlUnit={unit} />
            ))}

            {/* Imprimimos la(s) tecnologias especiales pasando la url 'unit' al componente Tech**/}
            {lista.unique_tech.map((unit) => (
              <Tech urlTech={unit} />
            ))}

            {/* imprimimos el bonus de equipo */}
            <div>
              <b>Bonus de Equipo:</b> {lista.team_bonus}
            </div>

            {/* Imprimimos el/los bonus de la civilizacion mapeando la parte 'civilization_bonus' */}
            <div>
              <b>Bonus de Civilizacion:</b>
              {lista.civilization_bonus.map((bonus) => (
                <Bonus bonus={bonus} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
