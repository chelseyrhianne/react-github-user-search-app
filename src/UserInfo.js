import React from "react";
import Profile from "./Profile";
import Stats from "./Stats";
import Links from "./Links";
import "./UserInfo.css";

export default function UserInfo() {
  return (
    <div class="UserInfo">
      <Profile />
      <Stats />
      <Links />
    </div>
  );
}
