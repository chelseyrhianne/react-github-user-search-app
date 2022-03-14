import React from "react";
import "./Links.css";

export default function Links(props) {
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
          <p className={props.data.location ? `available` : `unavailable`}>
            {props.data.location ? `${props.data.location}` : "Not Available"}
          </p>
        </div>
        <div className="Link">
          <img src="./icons/icon-website.svg" alt="website" width="72" />
          <a
            className={props.data.website ? `available` : `unavailable`}
            href={props.data.website}
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.data.website ? `${props.data.website}` : "Not Available"}
          </a>
        </div>
      </div>
      <div className="Link-pair">
        <div className="Link">
          <img
            className={props.data.twitter ? `available` : `unavailable`}
            src="./icons/icon-twitter.svg"
            alt="twitter"
            width="72"
          />
          <a
            className={props.data.twitter ? `available` : `unavailable`}
            href={`https://twitter.com/${props.data.twitter}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.data.twitter ? `@${props.data.twitter}` : "Not Available"}
          </a>
        </div>
        <div className="Link">
          <img src="./icons/icon-company.svg" alt="company" width="72" />
          <p className={props.data.company ? `available` : `unavailable`}>
            {props.data.company ? `${props.data.company}` : "Not Available"}
          </p>
        </div>
      </div>
    </div>
  );
}
