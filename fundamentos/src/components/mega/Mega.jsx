import React, { useState } from "react";

export default function Mega(props) {
  const [qtde, setQtde] = useState(props.qtde || 6);
  const [numeros, setNumeros] = useState(Array(qtde).fill(0));

  function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function gerarListaAleatorios(qtdeNumeros) {
    const listaAleatorios = [];

    for (let i = 0; i < qtdeNumeros; i++) {
      let numGerado = gerarNumeroAleatorio(1, 60);
      while (listaAleatorios.includes(numGerado)) {
        numGerado = gerarNumeroAleatorio(1, 60);
      }
      listaAleatorios.push(numGerado);
    }
    return listaAleatorios.sort((n1, n2) => n1 - n2)
  }

  return (
    <div>
      <label htmlFor="qtde">Quantos números? </label>
      <input id="qtde" type="number" width='40px' value={qtde}
        onChange={e => setQtde(+e.target.value)}/>
      <div>
        <button onClick={_ => setNumeros(gerarListaAleatorios(qtde))} style={{margin: '10px'}}>Gerar aleatórios</button>
      </div>
      <p>{numeros.join(' ')}</p>
    </div>
  );
}
