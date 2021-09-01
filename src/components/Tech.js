import React, { useEffect, useState } from "react";

function Tech(props) {
  const [tech, settech] = useState([]);

  useEffect(() => {
    fetch(props.urlTech)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        settech(data);
      })
      .catch(() => {
        console.log("Salio un Error en Tech");
      });
  }, []);
  return (
    <div>
      <b>Tecnologia Unica:</b> {tech.name}
    </div>
  );
}

export default Tech;
