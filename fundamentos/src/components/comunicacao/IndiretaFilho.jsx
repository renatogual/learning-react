import React from "react";

export default function IndiretaFilho(props) {
  const gerarIdade = () => parseInt(Math.random() * (70 - 50)) + 50;
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => props.quandoClicar("João", gerarIdade(), true)}>
        Fornecer Informações
      </button>
    </div>
  );
}
