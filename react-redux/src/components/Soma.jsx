import React from "react";
import Card from "./Card";

import { connect } from "react-redux";

function Soma({ min, max }) {
  return (
    <Card title="Soma de números">
      <span>
        <span>Resultado: </span>
        <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma);
