import React from "react";

const DatawrapperTable = ({ src, title = "Datawrapper Table" }) => (
  <iframe
    title={title}
    src={src}
    scrolling="no"
    frameBorder="0"
    style={{
      border: "none",
      width: "100%",
      height: "500px",
      borderRadius: "8px",
      background: "#fff"
    }}
    data-external="1"
    allowFullScreen
  />
);

export default DatawrapperTable;