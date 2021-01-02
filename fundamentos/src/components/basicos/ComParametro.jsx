import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>
        {props.aluno} foi {status}!
      </h3>
    </div>
  );
}
