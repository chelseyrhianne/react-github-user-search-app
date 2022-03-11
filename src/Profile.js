import React from "react";
import "./Profile.css";

export default function Profile(props) {
  return (
    <div className="Profile">
      <div className="PrimaryInfo">
        <div className="Avatar">
          <img src={props.data.avatar} alt="user avatar" id="avatar" />
        </div>
        <div className="Username">
          <h1>The Octocat</h1>
          <h3>@octocat</h3>
        </div>
        <div className="Joined">
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>
    </div>
  );
}
