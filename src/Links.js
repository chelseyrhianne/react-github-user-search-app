import React from "react";
import "./Links.css";

export default function Links() {
  return (
    <div className="Links">
      <div className="Link-pair">
        <div className="Link">
          <img
            src="./icons/icon-location.svg"
            alt="location"
            width="72"
            className="Location"
          />
          <p>San Francisco</p>
        </div>
        <div className="Link">
          <img src="./icons/icon-website.svg" alt="website" width="72" />
          <p>https://github.blog</p>
        </div>
      </div>
      <div className="Link-pair">
        <div className="Link">
          <img src="./icons/icon-twitter.svg" alt="twitter" width="72" />
          <p>Not available</p>
        </div>
        <div className="Link">
          <img src="./icons/icon-company.svg" alt="company" width="72" />
          <p>@github</p>
        </div>
      </div>
    </div>
  );
}
