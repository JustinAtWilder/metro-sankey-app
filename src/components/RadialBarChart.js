/* eslint-disable no-dupe-keys */
import React, { useState, useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import "@fontsource/montserrat/700.css";

const RadialBarChart = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const colors = useMemo(() => ["#006275", "#12743C", "#AF272F", "#C6612D", "#FCB440"], []); // Define colors separately
  
  const options = useMemo(() => ({
    series: [90, 88, 55, 58, 51],
    chart: {
      height: 350,
      type: "radialBar",
      events: {
        dataPointMouseEnter: function (event, chartContext, opts) {
          const hollowElement = chartContext.el.querySelector(".apexcharts-radialbar-hollow");
          if (hollowElement) {
            hollowElement.setAttribute('fill', '#082131'); // Fade to transparent
          }
          setHighlightedIndex(opts.dataPointIndex); // Highlight corresponding text
        },
        dataPointMouseLeave: function (event, chartContext, opts) {
          const hollowElement = chartContext.el.querySelector(".apexcharts-radialbar-hollow");
          if (hollowElement) {
            hollowElement.setAttribute('fill', 'transparent'); // Fade back to fully visible
          }
          setHighlightedIndex(null); // Remove highlight
        },
      },
      animations: {
        enabled: true,
        speed: 600,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -180,
        endAngle: 180,
        hollow: {
          image: highlightedIndex === null ? "Layer 1.png" : "",
          imageWidth: 135,
          imageHeight: 135,
          imageClipped: false,
        },
        track: {
          background: "transparent",
        },
        position: "front",
        dataLabels: {
          value: {
            show: true,
            fontSize: "48px",
            color: colors[highlightedIndex] || "#F0F1EA",
            fontFamily: "Montserrat, sans-serif",
          },
          name: {
            show: false,
            fontSize: "18px",
            fontFamily: "Montserrat, sans-serif",
            
          },
          total: {
            show: false,
            label: "Total",
            formatter: function () {
              return 249;
            },
          },
        },
      },
    },
    labels: [
      "Transfer",
      "Undergraduate",
      "Part-time",
      "Of Color",
      "Pell-eligible",
    ],
    fill: {
      colors: colors,
    },
  }), [highlightedIndex, colors]); // Recompute options when highlightedIndex or colors change


  return (
    <div
      id="chart"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "700",
        maxWidth: "1920px",
      }}
    >
      <div
        id="main-chart"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left Labels */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "2.2rem", fontWeight: "bold", color: highlightedIndex === 4 ? "#fce040" : "#FCB440", }}
          >
            51%
          </span>
          <p
            style={{
              fontSize: "0.9rem",
              color: highlightedIndex === 4 ? "#fce040" : "#FCB440",
              textAlign: "center",
              margin: "1px 0",
            }}
          >
            Students
            <br />
            Pell-eligible*
          </p>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 15px",
            }}
          >
            <span
              style={{
                fontSize: "2.2rem",
                fontWeight: "bold",
                paddingTop: "40px",
                color: highlightedIndex === 3 ? "#ff8a33" : "#C6612D",
              }}
            >
              58%
            </span>
            <p
              style={{
                fontSize: "0.9rem",
                color: highlightedIndex === 3 ? "#ff8a33" : "#C6612D",
                textAlign: "center",
                margin: "1px 0",
              }}
            >
              Students
              <br />
              of color
            </p>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 15px",
              }}
            >
              <span
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "bold",
                  paddingTop: "40px",
                  color: highlightedIndex === 2 ? "#E03C31" : "#AF272F",
                }}
              >
                55%
              </span>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: highlightedIndex === 2 ? "#E03C31" : "#AF272F",
                  textAlign: "center",
                  margin: "1px 0",
                }}
              >
                Part-time
                <br />
                students
              </p>

            </div>
          </div>
        </div>
        {/* Chart */}
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          height={350}
        />
        {/* Center Labels */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              color: highlightedIndex === 1 ? "#17c662" : "#12743C",
            }}
          >
            88%
          </span>
          <p
            style={{
              fontSize: "0.9rem",
              color: highlightedIndex === 1 ? "#17c662" : "#12743C",
              textAlign: "center",
              margin: "1px 0",
            }}
          >
            Undergraduate
            <br />
            students
          </p>
          <span
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              paddingTop: "40px",
              color: highlightedIndex === 0 ? "#4bcbf2" : "#4D97AD",
            }}
          >
            90%
          </span>
          <p
            style={{
              fontSize: "0.9rem",
              color: highlightedIndex === 0 ? "#4bcbf2" : "#4D97AD",
              textAlign: "center",
              margin: "1px 0",
            }}
          >
            Transfer
            <br />
            students
          </p>
        </div>
        {/* Right Labels */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 15px",
            marginLeft: "130px",
            borderLeft: "1px solid #F0F1EA",
          }}
        >
          <div
            id="total-students"
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 15px",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                backgroundColor: "#006275",
                width: "120px",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                8,193
              </span>
              <span style={{ color: "white", fontSize: "0.9rem" }}>
                students
              </span>
            </div>
          </div>
          <hr style={{ width: "200px" }} />
          <div
            id="avg-age-and-first-gen"
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-evenly",
              width: "320px",
            }}
          >
            <div
              id="average-age"
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "2.2rem", fontWeight: "bold" }}>30</span>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#F0F1EA",
                  textAlign: "center",
                  margin: "0.25px 0",
                }}
              >
                Average age
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#999",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Students range in
                <br />
                age from 15-85 years.
              </p>
            </div>
            <div
              id="first-generation-students"
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "2.2rem", fontWeight: "bold" }}>59%</span>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#999",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                First-generation
                <br />
                students
              </p>
            </div>
          </div>
        </div>
      </div>
              <div
                style={{
                  display: "flex-wrap",
                  flexDirection: "row",
                  fontSize: "0.7rem",
                  width: "100%",
                  color: "#999",
                  textAlign: "left",
                  margin: "15px 0",
                  paddingTop: "10px",
                  paddingLeft: "30px",
                }}>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: highlightedIndex === 4 ? "#fce040" : "#FCB440",
                      textAlign: "left",
                      margin: "15px 0",
                    }}>
                    *Pell-eligible students are those who qualify for federal financial aid based on their family's income and other factors.
                    </p>
                </div>
    </div>
  );
};

export default RadialBarChart;
