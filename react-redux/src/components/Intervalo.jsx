import React from "react";
import Card from "./Card";
import "./Intervalo.css";

import { connect } from "react-redux";
import { alterarNumeroMin, alterarNumeroMax } from "../store/actions/numerosActions";

function Intervalo({ min, max, alterarMin, alterarMax }) {
  return (
    <div className="Intervalo">
      <Card title="Intervalo de números">
        <span>
          <strong>Mínimo: </strong>
          <input type="number" value={min} onChange={e => alterarMin(+e.target.value)} />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input type="number" value={max} onChange={e => alterarMax(+e.target.value)} />
        </span>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMin(novoNum) {
      const action = alterarNumeroMin(novoNum);
      dispatch(action);
    },
    alterarMax(novoNum) {
      const action = alterarNumeroMax(novoNum);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
