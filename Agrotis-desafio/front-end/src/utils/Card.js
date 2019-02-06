import React from "react";

export const Card = ({ search, docs }) => {
  return docs
    .filter(doc => doc.name.toLowerCase().includes(search.toLowerCase()))
    .map(({ name, description }, index) => (
      <div key={index} className="container-cards">
        <div className="card">
          <div className="view-doc">
            <div className="container-text">
              <p>Nome:</p>
              <i>{name}</i>
            </div>

            <div className="container-text">
              <p>Descrição:</p>
              <i>{description}</i>
            </div>
          </div>
        </div>
      </div>
    ));
};
