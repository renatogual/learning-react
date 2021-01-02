import React from "react";

export default function Aleatorio(props) {
  const { min, max } = props;
  const num = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        O valor gerado aleatóriamente entre {min} e {max} foi: {num}{" "}
      </p>
    </div>
  );
}
