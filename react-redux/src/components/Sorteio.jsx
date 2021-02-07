import React from "react";
import Card from "./Card";

import { connect } from "react-redux";

function Sorteio({ min, max }) {
  const numSorteado = parseInt(Math.random() * (max - min)) + min;
  return (
    <Card title="Sorteio de números">
      <span>
        <span>Resultado: </span>
        <strong>{numSorteado}</strong>
      </span>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Sorteio);
