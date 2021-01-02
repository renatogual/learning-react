/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

export default function App(props) {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>

      <div className="cards">
        <Card titulo="#01 - Primeiro Componente" cor="#080">
          <Primeiro />
        </Card>

        <Card titulo="#02 - Componente com Parametro" cor="#001988">
          <ComParametro
            titulo="Segundo Componente"
            aluno="José Renato"
            nota={9.0}
          />
        </Card>

        <Card titulo="#03 - Fragmento React" cor="#88007d">
          <Fragmento />
        </Card>

        <Card titulo="#04 - Números Aleatórios" cor="#883d00">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#05 - Componente com filhos" cor="#880000">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro" sobrenome="armando"/>
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>
      </div>
    </div>
  );
}
