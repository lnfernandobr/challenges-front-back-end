import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ButtonAddDoc, Loading } from "../utils/Loading";
import { Card } from "../utils/Card";
import { ButtonLoadMore } from "../utils/ButtonLoadMore";
import { Alert } from "../utils/Alert";
import { NavSearch } from "../utils/NavSearch";
import { get } from "../utils/Fetch";

const HomeConnect = ({ viewAlert }) => {
  const [search, setSearch] = useState("");
  const [docs, setDocs] = useState([]);
  const [numDoc, setNumDoc] = useState(1);
  const [totalDoc, setTotalDoc] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchMore = () => {
    if (numDoc >= totalDoc) {
      return;
    }

    setLoading(true);

    setNumDoc(prevState => {
      const newState = prevState + 1;

      get(newState).then(({ data: { data } }) => {
        setDocs([...docs, ...data]);
        setLoading(false);
      });

      return newState;
    });
  };

  const initialFetch = async () => {
    setLoading(true);

    const {
      data: { data, totalDoc }
    } = await get(numDoc);

    setTotalDoc(totalDoc);
    setDocs(data);
    setLoading(false);
  };

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <div className="container-docs">
      <div className="my-container">
        <NavSearch setSearch={setSearch} />

        <Alert viewAlert={viewAlert} />

        <div className="documents">
          <Card docs={docs} search={search} />

          {loading ? (
            <Loading />
          ) : (
            <ButtonLoadMore
              fetchMore={fetchMore}
              numDoc={numDoc}
              totalDoc={totalDoc}
            />
          )}
        </div>
      </div>

      <ButtonAddDoc />
    </div>
  );
};

const mapStateToProps = ({ viewAlert }) => {
  return {
    viewAlert
  };
};

export const Home = connect(mapStateToProps)(HomeConnect);
