import React from "react";

const chartIframes = [
  <iframe
    title="Accounting"
    aria-label="Line chart"
    id="datawrapper-chart-Fg28w"
    src="https://datawrapper.dwcdn.net/Fg28w/1/"
    scrolling="no"
    frameBorder="0"
    style={{ border: "none", width: "100%", height: "420px", borderRadius: "8px", background: "#fff" }}
    data-external="1"
    key="Fg28w"
  />,
  <iframe
    title="Cybersecurity"
    aria-label="Line chart"
    id="datawrapper-chart-7AeYK"
    src="https://datawrapper.dwcdn.net/7AeYK/1/"
    scrolling="no"
    frameBorder="0"
    style={{ border: "none", width: "100%", height: "420px", borderRadius: "8px", background: "#fff" }}
    data-external="1"
    key="7AeYK"
  />,
  <iframe
    title="Education"
    aria-label="Line chart"
    id="datawrapper-chart-XbwdO"
    src="https://datawrapper.dwcdn.net/XbwdO/1/"
    scrolling="no"
    frameBorder="0"
    style={{ border: "none", width: "100%", height: "420px", borderRadius: "8px", background: "#fff" }}
    data-external="1"
    key="XbwdO"
  />,
    <iframe
    title="Mental Health Practitioner"
    aria-label="Line chart"
    id="datawrapper-chart-vZwDX"
    src="https://datawrapper.dwcdn.net/vZwDX/1/"
    scrolling="no"
    frameBorder="0"
    style={{ border: "none", width: "100%", height: "420px", borderRadius: "8px", background: "#fff" }}
    data-external="1"
    key="vZwDX"
  />,
  <iframe
    title="Nursing"
    aria-label="Line chart"
    id="datawrapper-chart-vPzR3"
    src="https://datawrapper.dwcdn.net/vPzR3/1/"
    scrolling="no"
    frameBorder="0"
    style={{ border: "none", width: "100%", height: "420px", borderRadius: "8px", background: "#fff" }}
    data-external="1"
    key="vPzR3"
  />,

];

const TrendGrid = () => (
  <div style={{
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
    margin: "2px 0"
  }}>
    {chartIframes.map((iframe, idx) => (
      <div key={idx} style={{ flex: 1, minWidth: 0 }}>
        {iframe}
      </div>
    ))}
  </div>
);

export default TrendGrid;