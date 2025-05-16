/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Table from "./Table"; // Reusable Table component
import "@fontsource/montserrat"; // Import Montserrat font

const FieldOfStudyPage = () => {
  // Define multiple table configurations
  const tables = {
    progressSatis: {
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
          respondents: 102,
          disagree: 0.147,
          neutral: 0.078,
          agree: 0.775,
        },
        {
          field: "Cybersecurity majors",
          respondents: 34,
          disagree: 0.029,
          neutral: 0.088,
          agree: 0.882,
        },
        {
          field: "Education majors",
          respondents: 26,
          disagree: 0.192,
          neutral: 0.077,
          agree: 0.731,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.078,
          neutral: 0.172,
          agree: 0.75,
        },
        {
          field: "Nursing majors",
          respondents: 37,
          disagree: 0.0,
          neutral: 0.027,
          agree: 0.973,
        },
        {
          field: "All other majors",
          respondents: 227,
          disagree: 0.128,
          neutral: 0.119,
          agree: 0.753,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "I am satisfied with my career so far.",
      },
    },
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
          respondents: 102,
          disagree: 0.098,
          neutral: 0.137,
          agree: 0.765,
        },
        {
          field: "Cybersecurity majors",
          respondents: 34,
          disagree: 0.0,
          neutral: 0.059,
          agree: 0.941,
        },
        {
          field: "Education majors",
          respondents: 26,
          disagree: 0.115,
          neutral: 0.192,
          agree: 0.692,
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
          respondents: 226,
          disagree: 0.128,
          neutral: 0.124,
          agree: 0.748,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "I am satisfied with the level of responsibility of my current job.",
      },
    },
    educExperience: {
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
          respondents: 102,
          disagree: 0.088,
          neutral: 0.118,
          agree: 0.794,
        },
        {
          field: "Cybersecurity majors",
          respondents: 34,
          disagree: 0.118,
          neutral: 0.206,
          agree: 0.676,
        },
        {
          field: "Education majors",
          respondents: 25,
          disagree: 0.28,
          neutral: 0.12,
          agree: 0.60,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.109,
          neutral: 0.109,
          agree: 0.781,
        },
        {
          field: "Nursing majors",
          respondents: 37,
          disagree: 0.027,
          neutral: 0.081,
          agree: 0.892,
        },
        {
          field: "All other majors",
          respondents: 225,
          disagree: 0.076,
          neutral: 0.062,
          agree: 0.862,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "I am satisfied with my degree and educational experience.",
      },
    },
    loandebtOverwhelm: {
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
          respondents: 55,
          disagree: 0.455,
          neutral: 0.182,
          agree: 0.364,
        },
        {
          field: "Cybersecurity majors",
          respondents: 25,
          disagree: 0.28,
          neutral: 0.44,
          agree: 0.28,
        },
        {
          field: "Education majors",
          respondents: 16,
          disagree: 0.188,
          neutral: 0.063,
          agree: 0.75,
        },
        {
          field: "Mental health majors",
          respondents: 46,
          disagree: 0.283,
          neutral: 0.174,
          agree: 0.543,
        },
        {
          field: "Nursing majors",
          respondents: 21,
          disagree: 0.524,
          neutral: 0.143,
          agree: 0.333,
        },
        {
          field: "All other majors",
          respondents: 138,
          disagree: 0.391,
          neutral: 0.210,
          agree: 0.399,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My student loan debt is overwhelming.",
      },
    },
    communityInvolve: {
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
          respondents: 102,
          disagree: 0.245,
          neutral: 0.245,
          agree: 0.510,
        },
        {
          field: "Cybersecurity majors",
          respondents: 34,
          disagree: 0.294,
          neutral: 0.235,
          agree: 0.471,
        },
        {
          field: "Education majors",
          respondents: 25,
          disagree: 0.120,
          neutral: 0.240,
          agree: 0.640,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.047,
          neutral: 0.188,
          agree: 0.766,
        },
        {
          field: "Nursing majors",
          respondents: 37,
          disagree: 0.189,
          neutral: 0.243,
          agree: 0.568,
        },
        {
          field: "All other majors",
          respondents: 226,
          disagree: 0.150,
          neutral: 0.217,
          agree: 0.633,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "I am involved in my community.",
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
          respondents: 100,
          disagree: 0.410,
          neutral: 0.410,
          agree: 0.180,
        },
        {
          field: "Cybersecurity majors",
          respondents: 34,
          disagree: 0.382,
          neutral: 0.529,
          agree: 0.088,
        },
        {
          field: "Education majors",
          respondents: 26,
          disagree: 0.50,
          neutral: 0.462,
          agree: 0.038,
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
          respondents: 225,
          disagree: 0.427,
          neutral: 0.347,
          agree: 0.227,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My institution helped me to network with alumni.",
      },
    },
        careerStart: {
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
          respondents: 102,
          disagree: 0.216,
          neutral: 0.167,
          agree: 0.618,
        },
        {
          field: "Cybersecurity majors",
          respondents: 34,
          disagree: 0.147,
          neutral: 0.147,
          agree: 0.706,
        },
        {
          field: "Education majors",
          respondents: 25,
          disagree: 0.440,
          neutral: 0.120,
          agree: 0.440,
        },
        {
          field: "Mental health majors",
          respondents: 64,
          disagree: 0.188,
          neutral: 0.094,
          agree: 0.719,
        },
        {
          field: "Nursing majors",
          respondents: 37,
          disagree: 0.189,
          neutral: 0.0,
          agree: 0.811,
        },
        {
          field: "All other majors",
          respondents: 225,
          disagree: 0.276,
          neutral: 0.124,
          agree: 0.6,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "The degree I earned helped me get started in my career.",
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
          respondents: 102,
          disagree: 0.108,
          neutral: 0.059,
          agree: 0.833,
        },
        {
          field: "Cybersecurity majors",
          respondents: 34,
          disagree: 0.059,
          neutral: 0.029,
          agree: 0.912,
        },
        {
          field: "Education majors",
          respondents: 25,
          disagree: 0.320,
          neutral: 0.120,
          agree: 0.560,
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
          respondents: 224,
          disagree: 0.107,
          neutral: 0.125,
          agree: 0.776,
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
    communicationSkills: {
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
          respondents: 94,
          disagree: 0.117,
          neutral: 0.245,
          agree: 0.638,
        },
        {
          field: "Cybersecurity majors",
          respondents: 32,
          disagree: 0.063,
          neutral: 0.406,
          agree: 0.531,
        },
        {
          field: "Education majors",
          respondents: 23,
          disagree: 0.174,
          neutral: 0.217,
          agree: 0.609,
        },
        {
          field: "Mental health majors",
          respondents: 58,
          disagree: 0.121,
          neutral: 0.155,
          agree: 0.724,
        },
        {
          field: "Nursing majors",
          respondents: 36,
          disagree: 0.139,
          neutral: 0.194,
          agree: 0.667,
        },
        {
          field: "All other majors",
          respondents: 218,
          disagree: 0.060,
          neutral: 0.165,
          agree: 0.775,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain communication skills.",
      },
    },
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
          respondents: 94,
          disagree: 0.245,
          neutral: 0.223,
          agree: 0.532,
        },
        {
          field: "Cybersecurity majors",
          respondents: 31,
          disagree: 0.065,
          neutral: 0.065,
          agree: 0.871,
        },
        {
          field: "Education majors",
          respondents: 23,
          disagree: 0.565,
          neutral: 0.304,
          agree: 0.130,
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
          respondents: 217,
          disagree: 0.290,
          neutral: 0.240,
          agree: 0.470,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain technology skills.",
      },
    },
    professionalismSkills: {
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
          respondents: 94,
          disagree: 0.170,
          neutral: 0.266,
          agree: 0.564,
        },
        {
          field: "Cybersecurity majors",
          respondents: 32,
          disagree: 0.125,
          neutral: 0.406,
          agree: 0.469,
        },
        {
          field: "Education majors",
          respondents: 23,
          disagree: 0.130,
          neutral: 0.130,
          agree: 0.739,
        },
        {
          field: "Mental health majors",
          respondents: 57,
          disagree: 0.070,
          neutral: 0.175,
          agree: 0.754,
        },
        {
          field: "Nursing majors",
          respondents: 36,
          disagree: 0.250,
          neutral: 0.083,
          agree: 0.667,
        },
        {
          field: "All other majors",
          respondents: 213,
          disagree: 0.197,
          neutral: 0.216,
          agree: 0.587,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain professionalism skills.",
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
          respondents: 53,
          disagree: 0.208,
          neutral: 0.283,
          agree: 0.509,
        },
        {
          field: "Cybersecurity majors",
          respondents: 21,
          disagree: 0.238,
          neutral: 0.381,
          agree: 0.381,
        },
        {
          field: "Education majors",
          respondents: 17,
          disagree: 0.294,
          neutral: 0.059,
          agree: 0.647,
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
          respondents: 125,
          disagree: 0.168,
          neutral: 0.216,
          agree: 0.616,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain equity & inclusion skills.",
      },
    },
        creativitySkills: {
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
          respondents: 94,
          disagree: 0.309,
          neutral: 0.330,
          agree: 0.362,
        },
        {
          field: "Cybersecurity majors",
          respondents: 32,
          disagree: 0.344,
          neutral: 0.406,
          agree: 0.250,
        },
        {
          field: "Education majors",
          respondents: 23,
          disagree: 0.304,
          neutral: 0.174,
          agree: 0.522,
        },
        {
          field: "Mental health majors",
          respondents: 57,
          disagree: 0.175,
          neutral: 0.263,
          agree: 0.561,
        },
        {
          field: "Nursing majors",
          respondents: 35,
          disagree: 0.286,
          neutral: 0.257,
          agree: 0.457,
        },
        {
          field: "All other majors",
          respondents: 218,
          disagree: 0.206,
          neutral: 0.257,
          agree: 0.537,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain creativity skills.",
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
          respondents: 93,
          disagree: 0.452,
          neutral: 0.215,
          agree: 0.333,
        },
        {
          field: "Cybersecurity majors",
          respondents: 31,
          disagree: 0.387,
          neutral: 0.387,
          agree: 0.226,
        },
        {
          field: "Education majors",
          respondents: 23,
          disagree: 0.565,
          neutral: 0.348,
          agree: 0.087,
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
          respondents: 211,
          disagree: 0.436,
          neutral: 0.251,
          agree: 0.313,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My degree helped me gain customer service skills.",
      },
    },
    goalRelated: {
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
          respondents: 48,
          disagree: 0.229,
          neutral: 0.167,
          agree: 0.604,
        },
        {
          field: "Cybersecurity majors",
          respondents: 20,
          disagree: 0.100,
          neutral: 0.050,
          agree: 0.850,
        },
        {
          field: "Education majors",
          respondents: 16,
          disagree: 0.375,
          neutral: 0.063,
          agree: 0.563,
        },
        {
          field: "Mental health majors",
          respondents: 38,
          disagree: 0.105,
          neutral: 0.132,
          agree: 0.763,
        },
        {
          field: "Nursing majors",
          respondents: 20,
          disagree: 0.0,
          neutral: 0.20,
          agree: 0.80,
        },
        {
          field: "All other majors",
          respondents: 120,
          disagree: 0.125,
          neutral: 0.092,
          agree: 0.783,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My current position is related to the career goal I have now.",
      },
    },
    majorRelated: {
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
          respondents: 48,
          disagree: 0.188,
          neutral: 0.146,
          agree: 0.667,
        },
        {
          field: "Cybersecurity majors",
          respondents: 20,
          disagree: 0.1,
          neutral: 0.0,
          agree: 0.9,
        },
        {
          field: "Education majors",
          respondents: 16,
          disagree: 0.563,
          neutral: 0.0,
          agree: 0.438,
        },
        {
          field: "Mental health majors",
          respondents: 38,
          disagree: 0.211,
          neutral: 0.132,
          agree: 0.658,
        },
        {
          field: "Nursing majors",
          respondents: 20,
          disagree: 0.05,
          neutral: 0.0,
          agree: 0.95,
        },
        {
          field: "All other majors",
          respondents: 120,
          disagree: 0.233,
          neutral: 0.133,
          agree: 0.633,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My current position is related to my major.",
      },
    },
    goalDegree: {
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
          respondents: 48,
          disagree: 0.250,
          neutral: 0.271,
          agree: 0.479,
        },
        {
          field: "Cybersecurity majors",
          respondents: 20,
          disagree: 0.1,
          neutral: 0.05,
          agree: 0.85,
        },
        {
          field: "Education majors",
          respondents: 16,
          disagree: 0.563,
          neutral: 0.125,
          agree: 0.313,
        },
        {
          field: "Mental health majors",
          respondents: 38,
          disagree: 0.263,
          neutral: 0.132,
          agree: 0.605,
        },
        {
          field: "Nursing majors",
          respondents: 20,
          disagree: 0.05,
          neutral: 0.15,
          agree: 0.80,
        },
        {
          field: "All other majors",
          respondents: 120,
          disagree: 0.233,
          neutral: 0.133,
          agree: 0.633,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My current position is related to the career goal I had during my degree.",
      },
    },
    skillsApply: {
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
          respondents: 48,
          disagree: 0.146,
          neutral: 0.104,
          agree: 0.750,
        },
        {
          field: "Cybersecurity majors",
          respondents: 20,
          disagree: 0.0,
          neutral: 0.05,
          agree: 0.95,
        },
        {
          field: "Education majors",
          respondents: 16,
          disagree: 0.313,
          neutral: 0.0,
          agree: 0.688,
        },
        {
          field: "Mental health majors",
          respondents: 38,
          disagree: 0.079,
          neutral: 0.211,
          agree: 0.711,
        },
        {
          field: "Nursing majors",
          respondents: 20,
          disagree: 0.0,
          neutral: 0.0,
          agree: 1.0,
        },
        {
          field: "All other majors",
          respondents: 120,
          disagree: 0.075,
          neutral: 0.133,
          agree: 0.792,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "My current position requires me to use the skills I learned during my degree.",
      },
    },
    workMeaning: {
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
          respondents: 48,
          disagree: 0.208,
          neutral: 0.146,
          agree: 0.646,
        },
        {
          field: "Cybersecurity majors",
          respondents: 20,
          disagree: 0.05,
          neutral: 0.15,
          agree: 0.80,
        },
        {
          field: "Education majors",
          respondents: 16,
          disagree: 0.188,
          neutral: 0.063,
          agree: 0.75,
        },
        {
          field: "Mental health majors",
          respondents: 38,
          disagree: 0.026,
          neutral: 0.105,
          agree: 0.868,
        },
        {
          field: "Nursing majors",
          respondents: 20,
          disagree: 0.0,
          neutral: 0.05,
          agree: 0.95,
        },
        {
          field: "All other majors",
          respondents: 120,
          disagree: 0.092,
          neutral: 0.05,
          agree: 0.858,
        },
      ],
      pagination: false,
      search: false,
      sort: true,
      header: {
        text: "The work I do in my current position is meaningful to me.",
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
          <option value="progressSatis">Satisfaction with career so far</option>
          <option value="jobRespon">Level of job responsibility</option>
          <option value="educExperience">Satisfaction with degree and educational experience</option>
          <option value="loandebtOverwhelm">Student loan debt overwhelming</option>
          <option value="communityInvolve">Community involvement</option>
          <option value="networkAlumni">Networking with alumni</option>
          <option value="salaryEnough">Salary enough for monthly bills</option>
          <option value="careerStart">Degree helped start career</option>
          {/* Placeholder for activities */}
          <option value="communicationSkills">Gained communication skills</option>
          <option value="techSkills">Gained technology skills</option>
          <option value="professionalismSkills">Gained professionalism skills</option>
          <option value="inclusionSkills">Gained equity & inclusion skills</option>
          <option value="creativitySkills">Gained creativity skills</option>
          <option value="customerSkills">Gained customer service skills</option>
          <option value="goalRelated">Position related to career goal</option>
          <option value="majorRelated">Position related to major</option>
          <option value="goalDegree">Position related to degree goal</option>
          <option value="skillsApply">Position requires skills learned during degree</option>
          <option value="workMeaning">My work is meaningful to me</option>
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
