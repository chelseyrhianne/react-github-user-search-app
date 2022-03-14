import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./Profile.css";

export default function Profile(props) {
  return (
    <div className="Profile">
      <div className="PrimaryInfo">
        <div className="Avatar">
          <img src={props.data.avatar} alt="user avatar" id="avatar" />
        </div>
        <div className="Username">
          <h1>{props.data.name}</h1>
          <h3>@{props.data.login}</h3>
        </div>
        <div className="Joined">
          <p>
            Joined <FormattedDate date={props.data.date} />
          </p>
        </div>
      </div>
    </div>
  );
}
