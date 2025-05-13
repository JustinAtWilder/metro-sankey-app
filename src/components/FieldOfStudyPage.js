/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Table from "./Table"; // Reusable Table component
import "@fontsource/montserrat"; // Import Montserrat font

const FieldOfStudyPage = () => {
  // Define multiple table configurations
  const tables = {
    jobRespon: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 31,
          disagree: 0.065,
          neutral: 0.097,
          agree: 0.839,
        },
        {
          field: "Cybersecurity majors",
          respondents: 4,
          disagree: 0.0,
          neutral: 0.0,
          agree: 1.0,
        },
        {
          field: "Education majors",
          respondents: 11,
          disagree: 0.0,
          neutral: 0.091,
          agree: 0.909,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.141,
          neutral: 0.047,
          agree: 0.813,
        },
        {
          field: "Nursing majors",
          respondents: 36,
          disagree: 0.0,
          neutral: 0.0,
          agree: 1.0,
        },
        {
          field: "All other majors",
          respondents: 342,
          disagree: 0.117,
          neutral: 0.132,
          agree: 0.751,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "I am satisfied with the level of responsibility of my current job.",
      },
    },
    jobContent: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 31,
          disagree: 0.065,
          neutral: 0.161,
          agree: 0.774,
        },
        {
          field: "Cybersecurity majors",
          respondents: 4,
          disagree: 0.0,
          neutral: 0.0,
          agree: 1.0,
        },
        {
          field: "Education majors",
          respondents: 11,
          disagree: 0.0,
          neutral: 0.091,
          agree: 0.909,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.125,
          neutral: 0.156,
          agree: 0.719,
        },
        {
          field: "Nursing majors",
          respondents: 36,
          disagree: 0.0,
          neutral: 0.083,
          agree: 0.917,
        },
        {
          field: "All other majors",
          respondents: 340,
          disagree: 0.191,
          neutral: 0.138,
          agree: 0.671,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "I am content with the progression of my career.",
      },
    },
    careerPlan: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 31,
          disagree: 0.419,
          neutral: 0.355,
          agree: 0.226,
        },
        {
          field: "Cybersecurity majors",
          respondents: 4,
          disagree: 1.0,
          neutral: 0.0,
          agree: 0.0,
        },
        {
          field: "Education majors",
          respondents: 11,
          disagree: 0.364,
          neutral: 0.091,
          agree: 0.545,
        },
        {
          field: "Mental health majors",
          respondents: 63,
          disagree: 0.27,
          neutral: 0.254,
          agree: 0.476,
        },
        {
          field: "Nursing majors",
          respondents: 37,
          disagree: 0.324,
          neutral: 0.243,
          agree: 0.432,
        },
        {
          field: "All other majors",
          respondents: 342,
          disagree: 0.433,
          neutral: 0.284,
          agree: 0.284,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My institution helped me create a plan for my career.",
      },
    },
    careerEnvision: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 29,
          disagree: 0.354,
          neutral: 0.172,
          agree: 0.483,
        },
        {
          field: "Cybersecurity majors",
          respondents: 4,
          disagree: 0.5,
          neutral: 0.5,
          agree: 0.0,
        },
        {
          field: "Education majors",
          respondents: 11,
          disagree: 0.273,
          neutral: 0.0,
          agree: 0.727,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.25,
          neutral: 0.172,
          agree: 0.578,
        },
        {
          field: "Nursing majors",
          respondents: 37,
          disagree: 0.135,
          neutral: 0.135,
          agree: 0.73,
        },
        {
          field: "All other majors",
          respondents: 341,
          disagree: 0.302,
          neutral: 0.238,
          agree: 0.46,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My institution helped me envision my career options.",
      },
    },
    networkAlumni: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 31,
          disagree: 0.355,
          neutral: 0.581,
          agree: 0.065,
        },
        {
          field: "Cybersecurity majors",
          respondents: 4,
          disagree: 1.0,
          neutral: 0.0,
          agree: 0.0,
        },
        {
          field: "Education majors",
          respondents: 11,
          disagree: 0.455,
          neutral: 0.545,
          agree: 0.0,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.297,
          neutral: 0.359,
          agree: 0.344,
        },
        {
          field: "Nursing majors",
          respondents: 36,
          disagree: 0.333,
          neutral: 0.528,
          agree: 0.139,
        },
        {
          field: "All other majors",
          respondents: 339,
          disagree: 0.422,
          neutral: 0.369,
          agree: 0.209,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My institution helped me to network with alumni.",
      },
    },
    salaryEnough: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 31,
          disagree: 0.097,
          neutral: 0.0,
          agree: 0.903,
        },
        {
          field: "Cybersecurity majors",
          respondents: 4,
          disagree: 0.0,
          neutral: 0.0,
          agree: 1.0,
        },
        {
          field: "Education majors",
          respondents: 11,
          disagree: 0.455,
          neutral: 0.0,
          agree: 0.545,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.172,
          neutral: 0.078,
          agree: 0.75,
        },
        {
          field: "Nursing majors",
          respondents: 36,
          disagree: 0.028,
          neutral: 0.028,
          agree: 0.944,
        },
        {
          field: "All other majors",
          respondents: 339,
          disagree: 0.109,
          neutral: 0.112,
          agree: 0.779,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My salary is enough to pay my bills every month.",
      },
    },
    // Possible placeholder for activities
    techSkills: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 29,
          disagree: 0.241,
          neutral: 0.31,
          agree: 0.448,
        },
        {
          field: "Cybersecurity majors",
          respondents: 4,
          disagree: 0.0,
          neutral: 0.25,
          agree: 0.75,
        },
        {
          field: "Education majors",
          respondents: 9,
          disagree: 0.667,
          neutral: 0.222,
          agree: 0.111,
        },
        {
          field: "Mental health majors",
          respondents: 57,
          disagree: 0.211,
          neutral: 0.456,
          agree: 0.333,
        },
        {
          field: "Nursing majors",
          respondents: 36,
          disagree: 0.25,
          neutral: 0.472,
          agree: 0.278,
        },
        {
          field: "All other majors",
          respondents: 323,
          disagree: 0.272,
          neutral: 0.217,
          agree: 0.511,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain technology skills.",
      },
    },
    inclusionSkills: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 18,
          disagree: 0.222,
          neutral: 0.333,
          agree: 0.444,
        },
        {
          field: "Cybersecurity majors",
          respondents: 2,
          disagree: 0.5,
          neutral: 0.0,
          agree: 0.5,
        },
        {
          field: "Education majors",
          respondents: 5,
          disagree: 0.0,
          neutral: 0.0,
          agree: 1.0,
        },
        {
          field: "Mental health majors",
          respondents: 39,
          disagree: 0.103,
          neutral: 0.128,
          agree: 0.769,
        },
        {
          field: "Nursing majors",
          respondents: 22,
          disagree: 0.091,
          neutral: 0.045,
          agree: 0.864,
        },
        {
          field: "All other majors",
          respondents: 191,
          disagree: 0.194,
          neutral: 0.236,
          agree: 0.571,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain equity & inclusion skills.",
      },
    },
    customerSkills: {
      columns: [
        {
          name: "Field",
          id: "field",
          width: "20%",
        },
        {
          name: "Number of\nRespondents",
          id: "respondents",
          width: "15%",
        },
        {
          name: "Strongly Disagree\nor Disagree",
          id: "disagree",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Neither Agree\nnor Disagree",
          id: "neutral",
          width: "16%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Agree or\nStrongly Agree",
          id: "agree",
          width: "18%",
          formatter: (cell) => `${(parseFloat(cell) * 100).toFixed(0)}%`,
        },
        {
          name: "Total",
          id: "total",
          width: "15%",
          formatter: (_, row) => {
            // Access data directly by property name
            const disagree = parseFloat(row.disagree) * 100;
            const neutral = parseFloat(row.neutral) * 100;
            const agree = parseFloat(row.agree) * 100;
            const total = disagree + neutral + agree;

            // Handle potential floating point issues
            return total ? `${Math.round(total)}%` : "100%";
          },
        },
      ],
      data: [
        {
          field: "Accounting majors",
          respondents: 29,
          disagree: 0.483,
          neutral: 0.172,
          agree: 0.345,
        },
        {
          field: "Cybersecurity majors",
          respondents: 4,
          disagree: 0.25,
          neutral: 0.0,
          agree: 0.75,
        },
        {
          field: "Education majors",
          respondents: 9,
          disagree: 0.556,
          neutral: 0.444,
          agree: 0.0,
        },
        {
          field: "Mental health majors",
          respondents: 55,
          disagree: 0.164,
          neutral: 0.418,
          agree: 0.418,
        },
        {
          field: "Nursing majors",
          respondents: 36,
          disagree: 0.361,
          neutral: 0.222,
          agree: 0.417,
        },
        {
          field: "All other majors",
          respondents: 316,
          disagree: 0.440,
          neutral: 0.266,
          agree: 0.294,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain customer service skills.",
      },
    },
  };

  // State to track the selected table
  const [selectedTable, setSelectedTable] = useState("jobRespon");

  // Handle table selection
  const handleTableChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTable(selectedValue);
  };

  return (
    <div>
      {/* Dropdown to select the table */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <label
          htmlFor="tableSelect"
          style={{
            marginRight: "10px",
            fontSize: "14px",
            fontFamily: "Montserrat",
          }}
        >
          Select a Table:
        </label>
        <select
          id="tableSelect"
          value={selectedTable}
          onChange={handleTableChange}
          style={{
            padding: "5px",
            fontSize: "14px",
            fontFamily: "Montserrat",
          }}
        >
          <option value="jobRespon">Level of job responsibility</option>
          <option value="jobContent">Contentment with career progression</option>
          <option value="careerPlan">Career plan assistance</option>
          <option value="careerEnvision">Envisioning career options</option>
          <option value="networkAlumni">Networking with alumni</option>
          <option value="salaryEnough">Salary enough for monthly bills</option>
          <option value="techSkills">Gained technology skills</option>
          <option value="inclusionSkills">Gained equity & inclusion skills</option>
          <option value="customerSkills">Gained customer service skills</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Render the selected table */}
      <Table
        key={selectedTable} // Force re-render when selectedTable changes
        title={tables[selectedTable].title}
        subtitle={tables[selectedTable].subtitle}
        columns={tables[selectedTable].columns}
        data={tables[selectedTable].data}
        pagination={tables[selectedTable].pagination}
        search={tables[selectedTable].search}
        sort={tables[selectedTable].sort}
        header={tables[selectedTable].header}
      />
    </div>
  );
};

export default FieldOfStudyPage;
