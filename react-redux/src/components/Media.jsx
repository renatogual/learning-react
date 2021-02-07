import React from "react";
import Card from "./Card";

import { connect } from "react-redux";

function Media({ min, max }) {
  return (
    <Card title="Média de números">
      <span>
        <span>Resultado: </span>
        <strong>{(min + max) / 2}</strong>
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

export default connect(mapStateToProps)(Media);
