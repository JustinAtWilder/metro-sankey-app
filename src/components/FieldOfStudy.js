import React, { useEffect, useRef } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css"; // Import Grid.js styles
import "@fontsource/montserrat/700.css";

const FieldOfStudy = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    // Initialize the Grid.js instance
    const grid = new Grid({
      columns: [

        {
          name: "Field of Study",
        },
        {
          name: "I am satisfied with the level of responsibility of my current job.",
          columns: [
            {
              name: "Number of Respondents",
              formatter: (cell) => `${cell}`,
            },
            {
              name: "Strongly Disagree or Disagree",
              formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
            },
            {
              name: "Neutral",
              formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
            },
            {
              name: "Agree or Strongly Agree",
              formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
            },
            {
              name: "Total",
              formatter: (_, row) =>
                `${(
                  parseFloat(row.cells[2].data * 100) +
                  parseFloat(row.cells[3].data * 100) +
                  parseFloat(row.cells[4].data * 100)
                ).toFixed(0)}%`,
            },
          ],
        },
        
      ],
      data: [
        ["Accounting majors", 31, 0.065, 0.097, 0.839],
        ["Cybersecurity majors", 4, 0.0, 0.0, 1.0],
        ["Education majors", 11, 0.0, 0.091, 0.909],
        ["Mental health majors", 64, 0.141, 0.047, 0.813],
        ["Nursing majors", 36, 0.0, 0.0, 1.0],
        ["All other majors", 342, 0.117, 0.132, 0.751],
      ],
      pagination: false,
      search: false,
      sort: true,
      style: {
    table: {
      border: '3px solid #ccc'
    },
    th: {
      'background-color': '#4D97AD',
      color: '#000',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center',
      'text-justify': 'bottom',
    },
    td: {
      'text-align': 'center'
    }
  }
    });

    // Render the grid in the referenced container
    grid.render(gridRef.current);
  }, []);

  return (
    <div>
      <div ref={gridRef}></div>
    </div>
);};

export default FieldOfStudy;