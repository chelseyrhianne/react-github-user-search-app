import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile">
      <div className="PrimaryInfo">
        <h1>The Octocat</h1>
        <p>Joined 25 Jan 2011</p>
      </div>
      <h3>@octocat</h3>
      <p>This profile has no bio</p>
    </div>
  );
}
