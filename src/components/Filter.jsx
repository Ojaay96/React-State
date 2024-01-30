import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <div
      className="filter"
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "10px",
        padding: "10px",
        fontSize: "medium",
      }}
    >
      <h4>FILTER MOVIES</h4>
      <label>
        Title:
        <input
          type="text"
          onChange={(e) => onFilterChange("title", e.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="text"
          onChange={(e) => onFilterChange("rating", e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
