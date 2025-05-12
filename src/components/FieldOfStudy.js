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
      "Field of Study",
      {
        name: "Disagree or Strongly Disagree",
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
          parseFloat(row.cells[1].data * 100) +
          parseFloat(row.cells[2].data * 100) +
          parseFloat(row.cells[3].data * 100)
        ).toFixed(0)}%`,
      },
      ],
      data: [
      ["Accounting BS (N=31)", "0.129", "0.129", "0.742"],
      ["Advanced Dental Therapy MSADT (N=1)", "0", "0", "1"],
      ["Advocacy and Political Leadership MAPL (N=1)", "0", "0", "1"],
      ["Alcohol and Drug Counseling BS (N=11)", "0.182", "0.273", "0.545"],
      ["Applied Mathematics BS (N=5)", "0", "0", "1"],
      ["Biology BA (N=9)", "0", "0.333", "0.667"],
      ["Biology BS (N=4)", "0", "0.25", "0.75"],
      ["Business Administration BS (N=45)", "0.178", "0.067", "0.756"],
      ["Business Administration DBA (N=1)", "0", "0", "1"],
      ["Business Administration MBA (N=19)", "0.105", "0.053", "0.842"],
      ["Chemistry BS (N=4)", "0", "0", "1"],
      ["Computer Forensics BAS (N=4)", "0", "0", "1"],
      ["Computer Information Systems BA (N=2)", "0", "0", "1"],
      ["Computer Information Technology BS (N=5)", "0", "0.2", "0.8"],
      ["Computer Science BS (N=10)", "0", "0.1", "0.9"],
      ["Computer Science MS (N=1)", "0", "0", "1"],
      ["Creative Writing BA (N=6)", "0.333", "0.333", "0.333"],
      ["Criminal Justice BA (N=14)", "0.214", "0.071", "0.714"],
      ["Criminal Justice BS (N=1)", "0", "0", "1"],
      ["Early Childhood Studies BAS (N=3)", "0", "0", "1"],
      ["Economics BS (N=1)", "0", "0", "1"],
      ["English BA (N=9)", "0.111", "0.111", "0.778"],
      ["English Teaching BS (N=1)", "0", "0", "1"],
      ["Ethnic Studies BA (N=1)", "1", "0", "0"],
      ["Finance BS (N=5)", "0.2", "0", "0.8"],
      ["Gender Studies BA (N=4)", "0", "0", "1"],
      ["History BA (N=7)", "0.143", "0", "0.857"],
      ["Human Resource Management BS (N=10)", "0.1", "0", "0.9"],
      ["Human Services BHS (N=7)", "0.143", "0.429", "0.429"],
      ["Human Services BS (N=12)", "0.083", "0.083", "0.833"],
      ["Individualized Studies BA (N=56)", "0.179", "0.107", "0.714"],
      ["Industrial Management BAS (N=1)", "0", "0", "1"],
      ["International Business BS (N=2)", "0", "0", "1"],
      ["Law Enforcement BS (N=10)", "0.1", "0", "0.9"],
      ["Liberal Arts BA (N=8)", "0.25", "0.125", "0.625"],
      ["Liberal Studies MA (N=7)", "0.429", "0.143", "0.429"],
      ["Management BS (N=6)", "0.167", "0", "0.833"],
      ["Management Information Systems BS (N=8)", "0.125", "0", "0.875"],
      ["Management Information Systems MMIS (N=4)", "0", "0.25", "0.75"],
      ["Marketing BS (N=8)", "0.125", "0", "0.875"],
      ["Nursing BSN (N=24)", "0", "0", "1"],
      ["Nursing MSN (N=3)", "0", "0.333", "0.667"],
      ["Nursing Practice DNP (N=1)", "0", "0", "1"],
      ["Nursing Science MSN (N=9)", "0", "0", "1"],
      ["Oral Health Care Practitioner (ADHP) MS (N=1)", "0", "0", "1"],
      ["Philosophy BA (N=3)", "0", "0.667", "0.333"],
      ["Professional Communication BA (N=9)", "0", "0", "1"],
      ["Professional Communications BA (N=2)", "0.5", "0", "0.5"],
      ["Psychology BA (N=22)", "0.045", "0.182", "0.773"],
      ["Psychology MA (N=3)", "0", "0", "1"],
      ["Public and Nonprofit Administration MPNA (N=22)", "0.045", "0.136", "0.818"],
      ["Screenwriting BA (N=3)", "0", "0.667", "0.333"],
      ["Social Science BA (N=8)", "0.375", "0.125", "0.5"],
      ["Social Studies Teaching BS (N=3)", "0", "0", "1"],
      ["Social Work BSW (N=9)", "0", "0", "1"],
      ["Supply Chain and Operations Management BS (N=2)", "0", "0.5", "0.5"],
      ["Technical Communication and Professional Writing BA (N=3)", "0", "0.333", "0.667"],
      ["Technical Communication MS (N=6)", "0.167", "0.167", "0.667"],
      ["Technical Communications BA (N=2)", "0", "0.5", "0.5"],
      ["Technical Communications MS (N=3)", "0", "0", "1"],
      ["Urban Early Childhood Education BS (N=1)", "0", "0", "1"],
      ["Urban Education MS (N=1)", "0", "1", "0"],
      ["Urban Elementary Education BS (N=2)", "0", "0", "1"],
      ["Writing BA (N=3)", "0.333", "0", "0.667"],
      ],
      pagination: true,
      search: false,
      sort: true,
    });

    // Render the grid in the referenced container
    grid.render(gridRef.current);
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontFamily: "Montserrat", fontWeight: 700, fontSize: "14px" }}>
        Field of Study Survey Results
      </h2>
      <h3 style={{ textAlign: "center", marginBottom: "20px", textEmphasisStyle: "italics", fontSize: "22px", fontFamily: "Montserrat", fontWeight: 700 }}>

        "I am satisfied with the progression of my career."
      </h3>
      <div ref={gridRef}></div>
    </div>
);};

export default FieldOfStudy;