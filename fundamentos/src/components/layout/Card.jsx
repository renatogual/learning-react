import React from "react";
import "./Card.css";

export default function Card(props) {
  const estilo = {
    backgroundColor: props.cor || "#f00",
    borderColor: props.cor || "#f00",
  };

  return (
    <div className="card" style={estilo}>
      <div className="titulo">{props.titulo}</div>
      <div className="conteudo">{props.children}</div>
    </div>
  );
}
