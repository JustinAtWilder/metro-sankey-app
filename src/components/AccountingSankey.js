import Plotly from "plotly.js-dist";
import React, { useEffect } from "react";
import { accountingData } from "../data/accountingData"; // Import the data

const AccountingSankey = () => {
  useEffect(() => {
    const graphDiv = document.getElementById("sankey");
    if (graphDiv) {
      // Function to update the plot
      const updatePlot = () => {
        const layout = {
          width: window.innerWidth, // Make this responsive to your container
          height: 500,
          font: {
            size: 10,
            color: "white",
            textcase: "word caps",
          },
          margin: {
            l: 20,
            r: 30, // Increase right margin to prevent cutoff
            t: 20,
            b: 20
          },
          paper_bgcolor: "transparent", // Set the background color of the entire plot
          plot_bgcolor: "transparent", // Set the background color of the plotting area
          sankey: {
            node: {
              thickness: 20,
              line: {
                color: "white",
                width: 0.7
              },
            },
            link: {
              colorscale: "YlGnBu"
            }
          },
          annotations: [
            {
              x: 0.0,
              y: 1.05,
              xref: 'paper',
              yref: 'paper',
              text: 'Majors',
              showarrow: false,
              font: {
                size: 11,
                color: 'white'
              }
            },
            {
              x: 0.23,
              y: 1.05,
              xref: 'paper',
              yref: 'paper',
              text: 'Internships',
              showarrow: false,
              font: {
                size: 11,
                color: 'white'
              }
            },
            {
              x: 0.50,
              y: 1.05,
              xref: 'paper',
              yref: 'paper',
              text: 'Industry',
              showarrow: false,
              font: {
                size: 11,
                color: 'white'
              }
            },
            {
              x: 0.77,
              y: 1.05,
              xref: 'paper',
              yref: 'paper',
              text: 'Job Level',
              showarrow: false,
              font: {
                size: 11,
                color: 'white'
              }
            },
            {
              x: 1,
              y: 1.05,
              xref: 'paper',
              yref: 'paper',
              text: 'Job title',
              showarrow: false,
              font: {
                size: 11,
                color: 'white'
              }
            }
          ]
        };

        Plotly.react(graphDiv, [accountingData], layout, {displayModeBar: false});
      };

      // Initial render
      updatePlot();
      
      // Add resize listener
      window.addEventListener('resize', updatePlot);
      
      // Cleanup
      return () => window.removeEventListener('resize', updatePlot);
    }
  }, []);

  return <div id="sankey" className="sankey-container"></div>;
};

export default AccountingSankey;