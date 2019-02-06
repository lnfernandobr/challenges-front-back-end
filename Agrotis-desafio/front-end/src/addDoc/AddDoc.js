import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { viewAlertAction } from "../redux/actions/actions";

export const AddDocConnect = ({ viewAlertAction, history }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [limitName, setLimitName] = useState(0);
  const [limitDescription, setLimitDescription] = useState(0);

  const add = () => {
    axios.post("http://localhost:5000/api/save", {
      name,
      description
    });

    viewAlertAction();
    history.push("/");
  };

  return (
    <div className="root">
      <div className="my-container">
        <div className="box-title-input">
          <Link to="/" className="link">
            <i className="material-icons" style={{ marginRight: "8px" }}>
              reply
            </i>
            Voltar
          </Link>
          <div>
            <button className="btn">
              <Link to="/">Voltar</Link>
            </button>
            <button className="btn" onClick={add}>
              Salvar
            </button>
          </div>
        </div>

        <div className="documents">
          <div className="container-cards">
            <div className="card">
              <div className="view-doc-add">
                <div className="add-name">
                  <p>Nome *</p>
                  <div className="input-limit">
                    <input
                      type="text"
                      value={name}
                      className="input-name"
                      onChange={({ target: { value } }) => {
                        if (value.length <= 20) {
                          setName(value);
                          setLimitName(value.length);
                        }
                      }}
                    />
                    <p>{`${limitName}/20`}</p>
                  </div>
                </div>

                <div className="add-description">
                  <p>Descrição:</p>
                  <div className="input-limit">
                    <input
                      type="text"
                      value={description}
                      className="input-name"
                      onChange={({ target: { value } }) => {
                        if (value.length <= 240) {
                          setDescription(value);
                          setLimitDescription(value.length);
                        }
                      }}
                    />
                    <p>{`${limitDescription}/240`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    viewAlertAction: () => dispatch(viewAlertAction())
  };
};

export const AddDoc = connect(
  null,
  mapDispatchToProps
)(withRouter(AddDocConnect));
