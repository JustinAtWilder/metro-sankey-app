import React, { useEffect, useRef } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const Table = ({ title, subtitle, columns, data, pagination = true, search = true, sort = true, header = null }) => {
  const wrapperRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    // Clean up previous instance if it exists
    if (tableRef.current) {
      tableRef.current.destroy();
    }

    // Extract column configurations
    const columnConfig = columns.map(col => {
      const config = { 
        name: col.name,
        id: col.id
      };
      
      if (col.formatter) {
        config.formatter = (cell, row) => col.formatter(cell, row);
      }
      
      return config;
    });

    // Initialize Grid.js
    tableRef.current = new Grid({
      columns: columnConfig,
      data: data,
      pagination: pagination ? { limit: 10 } : false,
      search: search,
      sort: sort,
      language: {
        search: {
          placeholder: "🔍 Search..."
        },
        pagination: {
          previous: "Previous",
          next: "Next",
          showing: "Showing",
          results: () => "results"
        }
      },
      className: {
        table: "table-auto w-full text-left",
        thead: "bg-gray-100",
        th: "px-4 py-2 text-slate-700",
        td: "border-t px-4 py-2",
        footer: "mt-2"
      },
      style: {
        table: {
          "font-family": "Arial, sans-serif"
        },
        th: {
          "background-color": "#467f99ff",
          "font-weight": "600",
          "white-space": "pre-wrap"
        }
      }
    }).render(wrapperRef.current);

    // Clean up on component unmount
    return () => {
      if (tableRef.current) {
        tableRef.current.destroy();
      }
    };
  }, [columns, data, pagination, search, sort]);

  return (
    <div className="table-container">
      {/* Table Header */}
      {(title || subtitle || header) && (
        <div className="table-header" style={{ marginBottom: "1rem", textAlign: "center" }}>
          {title && <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</h2>}
          {subtitle && <p style={{ fontSize: "1rem", color: "#666", marginBottom: "0.5rem" }}>{subtitle}</p>}
          {header && header.text && (
            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", margin: "1rem 0" }}>
              {header.text}
            </h3>
          )}
        </div>
      )}
      
      {/* Grid.js will render here */}
      <div ref={wrapperRef} />
    </div>
  );
};

export default Table;