import Plotly from "plotly.js-dist";
import React, { useEffect } from "react";
import { sankeyData } from "../data/sankeyData"; // Import the data

const Sankey = () => {
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
              y: .96,
              xref: 'paper',
              yref: 'paper',
              text: 'Internships',
              showarrow: false,
              font: {
                size: 10,
                color: 'white'
              }
            },
            {
              x: 0.03,
              y: 1.05,
              xref: 'paper',
              yref: 'paper',
              text: 'Are internships a helpful path into careers?',
              showarrow: false,
              font: {
                size: 12,
                color: 'white'
              }
            },
            {
              x: 0.23,
              y: .96,
              xref: 'paper',
              yref: 'paper',
              text: 'Career Satisfaction',
              showarrow: false,
              font: {
                size: 10,
                color: 'white'
              }
            },
            {
              x: 0.50,
              y: .96,
              xref: 'paper',
              yref: 'paper',
              text: 'Majors',
              showarrow: false,
              font: {
                size: 10,
                color: 'white'
              }
            },
            {
              x: 0.50,
              y: 1.05,
              xref: 'paper',
              yref: 'paper',
              text: 'Do most majors go into a related field?',
              showarrow: false,
              font: {
                size: 12,
                color: 'white'
              }
            },
            {
              x: 0.77,
              y: 0.96,
              xref: 'paper',
              yref: 'paper',
              text: 'Related Field',
              showarrow: false,
              font: {
                size: 10,
                color: 'white'
              }
            },
            {
              x: 0.99,
              y: 1.05,
              xref: 'paper',
              yref: 'paper',
              text: 'Does Metro State effectively foster industry relationships?',
              showarrow: false,
              font: {
                size: 12,
                color: 'white'
              }
            },
            {
              x: 1,
              y: 0.96,
              xref: 'paper',
              yref: 'paper',
              text: 'Employer Networks',
              showarrow: false,
              font: {
                size: 10,
                color: 'white'
              }
            }
          ]
        };

        Plotly.react(graphDiv, [sankeyData], layout, {displayModeBar: false});
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

export default Sankey;