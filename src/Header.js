import React from "react";
import "./Header.css";
import Toggle from "./Toggle.js";

export default function Header() {
  return (
    <div className="Header">
      <p>DevFinder</p>
      <Toggle />
    </div>
  );
}
