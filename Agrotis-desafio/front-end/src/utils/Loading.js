import React from "react";
import { Link } from 'react-router-dom';

export const Loading = () => (
  <div className="loading">
    <h5>Loading</h5>
  </div>
);

export const ButtonAddDoc = () => (
  <div className="container-btn-add">
    <Link to="/add">
      <img
        src="./images/plus.png"
        width="50px"
        className="btn-icon"
        alt="Adiconar documento"
      />
    </Link>
  </div>

);