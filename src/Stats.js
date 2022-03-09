import React from "react";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="Stats">
      <div className="StatsItem">
        <h4>Repos</h4>
        <h2>8</h2>
      </div>
      <div className="StatsItem">
        <h4>Followers</h4>
        <h2>3938</h2>
      </div>
      <div className="StatsItem">
        <h4>Following</h4>
        <h2>9</h2>
      </div>
    </div>
  );
}
