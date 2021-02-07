import React from "react";
import Card from "./Card";
import "./Intervalo.css";

export default () => {
  return (
    <div className="Intervalo">
      <Card title="Intervalo de números">
        <span>
          <strong>Mínimo: </strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input type="number" value={10} readOnly />
        </span>
      </Card>
    </div>
  );
};
