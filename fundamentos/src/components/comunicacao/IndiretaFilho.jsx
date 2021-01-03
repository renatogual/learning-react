import React from "react";

export default function IndiretaFilho(props) {
  return (
    <div>
      <div>Filho</div>
      <button onClick={_ => props.quandoClicar('João', 23, true)}>Fornecer Informações</button>
    </div>
  );
}
