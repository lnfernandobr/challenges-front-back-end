import React from "react";

export const NavSearch = ({ setSearch }) => (
  <div className="box-title-input">
    <p>Situação do Documento</p>
    <input
      type="text"
      className="form-control"
      placeholder="Pesquisar por nome"
      onChange={({ target: { value } }) => setSearch(value)}
    />
  </div>
);
