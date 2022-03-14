import React from "react";
import "./Bio.css";

export default function Bio(props) {
  if (props.data.bio) {
    return (
      <div className="Bio">
        <p>{props.data.bio}</p>
      </div>
    );
  } else {
    return (
      <div className="Bio">
        <p>This profile has no bio</p>
      </div>
    );
  }
}
