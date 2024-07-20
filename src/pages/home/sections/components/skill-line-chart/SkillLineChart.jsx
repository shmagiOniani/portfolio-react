import React from "react";
import "./skill-line-chart.scss"

function SkillLineChart({ title, percentage }) {
  return (
    <div className="skill-line-chart">
      <div className="skill-chart-header">
        <span>{title}</span>
        <span style={{fontSize: "16px", letterSpacing: "2px"}}>{percentage}%</span>
      </div>
      <div className="chart">
        <div></div>
        <div style={{width: percentage+'%' }}></div>
      </div>
    </div>
  );
}

export default SkillLineChart;
