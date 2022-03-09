import React from "react";
import UserInfo from "./UserInfo";
import "./User.css";

export default function User() {
  return (
    <div className="User">
      <form className="user-search">
        <input
          id="username"
          type="text"
          className="search-bar"
          autoComplete="off"
          placeholder="Search GitHub username..."
        />
        <input type="submit" className="search-button" value="Search" />
      </form>
      <UserInfo />
    </div>
  );
}
