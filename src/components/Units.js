import React, { useEffect, useState } from "react";

function Units(props) {
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    fetch(props.urlUnit)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUnit(data);
      })
      .catch(() => {
        console.log("Salio un Error en Units");
      });
  }, []);
  return (
    <div>
      <div>
        <b>Unidad Unica: </b>
        {unit.name}
        <li>
          <b>Edad: </b>
          {unit.age}
        </li>
        <li>
          <b>Salud: </b>
          {unit.hit_points}
        </li>
        <li>
          <b>Visión: </b>
          {unit.line_of_sight}
        </li>
        <li>
          <b>Fuerza: </b>
          {unit.attack}
        </li>
        <li>
          <b>Armadura: </b>
          {unit.armor}
        </li>
      </div>
    </div>
  );
}

export default Units;
