/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default function (props) {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Primeiro />
      <ComParametro
        titulo="Segundo Componente"
        aluno="José Renato"
        nota={9.0}
      />
      <Fragmento />
    </div>
  );
}
