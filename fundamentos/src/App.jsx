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
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";

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
            <FamiliaMembro nome="Pedro" sobrenome="armando" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#06 - Lista" cor="#6ba056">
          <ListaAlunos />
        </Card>

        <Card titulo="#07 - Tabela" cor="#13c0cc">
          <TabelaProdutos />
        </Card>

        <Card titulo="#08 - Renderização condicional" cor="#b0cc13">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: "Fernando" }} />
        </Card>

        <Card titulo="#09 - Comunicação Direta" cor="#6913cc">
          <DiretaPai />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" cor="#52420f">
          <IndiretaPai />
        </Card>

        <Card titulo="#11 - Componente Controlado" cor="#cc7a7a">
          <Input />
        </Card>
      </div>
    </div>
  );
}
