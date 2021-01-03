/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const tr = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.produto}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });
  return (
    <div>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{tr}</tbody>
      </table>
    </div>
  );
};
