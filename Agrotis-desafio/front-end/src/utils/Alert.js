import React from "react";

export const Alert = ({ viewAlert }) => (
  <div style={viewAlert ? { display: "block" } : { display: "none" }}>
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>Situação Salva com sucesso! </strong>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
);
