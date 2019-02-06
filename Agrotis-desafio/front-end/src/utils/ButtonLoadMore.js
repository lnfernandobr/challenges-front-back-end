import React from "react";

export const ButtonLoadMore = ({ fetchMore, numDoc, totalDoc }) => (
  <div className="container-load-more">
    <button
      onClick={fetchMore}
      className="btn-loading-more"
    >{`Carregar mais (${numDoc}-${totalDoc})`}</button>
  </div>
);
