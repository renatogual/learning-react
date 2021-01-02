import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props) {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome="Ferreira"/>
      <FamiliaMembro nome="Ana" sobrenome="Ferreira" />
      <FamiliaMembro nome="Gustavo" sobrenome="Ferreira" />
    </div>
  );
}
