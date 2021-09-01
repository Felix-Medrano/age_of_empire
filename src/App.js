import React from "react";
import "./css/App.css";
import Data from "./components/Data";

function App() {
  const urlCivi =
    "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";

  return (
    <div className="App">
    {/* Pasamos la url al componente Data*/}
      <Data urlCivi={urlCivi} />
    </div>
  );
}

export default App;
