import React from "react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();

  return (
    <div className="results-container">
      <h1>Detection Results</h1>

      {/* Top Section with Two Image Cards */}
      <div className="top-section">
        <div className="card">
          <h3>Group 4</h3>
          <img src="/Group 4.png" alt="Group 4 Result" />
        </div>

        <div className="card">
          <h3>Untitled Design</h3>
          <img src="/Untitled design (1).png" alt="Untitled Design Result" />
        </div>
      </div>

      {/* Example Results Table */}
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Confidence</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Object A</td>
            <td>95%</td>
            <td>(120, 250)</td>
          </tr>
          <tr>
            <td>Object B</td>
            <td>87%</td>
            <td>(310, 400)</td>
          </tr>
        </tbody>
      </table>

      {/* Back Button */}
      <button className="btn" onClick={() => navigate("/")}>
        ⬅ Back to Upload
      </button>
    </div>
  );
};

export default Results;






