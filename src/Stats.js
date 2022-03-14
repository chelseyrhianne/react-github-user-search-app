import React from "react";
import "./Stats.css";

export default function Stats(props) {
  return (
    <div className="Stats">
      <div className="StatsItem">
        <h4>Repos</h4>
        <h2>{props.data.repos}</h2>
      </div>
      <div className="StatsItem">
        <h4>Followers</h4>
        <h2>{props.data.followers}</h2>
      </div>
      <div className="StatsItem">
        <h4>Following</h4>
        <h2>{props.data.following}</h2>
      </div>
    </div>
  );
}
