import React, { useState } from "react";
import Profile from "./Profile";
import Bio from "./Bio";
import Stats from "./Stats";
import Links from "./Links";
import "./User.css";
import axios from "axios";

export default function User(props) {
  const [userData, setUserData] = useState({ loaded: false });
  const [user, setUser] = useState(props.defaultUser);

  function handleResponse(response) {
    console.log(response);
    setUserData({
      loaded: true,
      name: response.data.name,
      login: response.data.login,
      joined: response.data.created_at,
      avatar: response.data.avatar_url,
      repos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following,
      location: response.data.location,
      website: response.data.blog,
      twitter: response.data.twitter_username,
      company: response.data.company,
    });
  }

  function search() {
    let apiUrl = `https://api.github.com/users/${user}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setUser(event.target.value);
  }

  return (
    <div className="User">
      <form className="user-search" onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          className="search-bar"
          autoComplete="off"
          placeholder="Search GitHub username..."
          onChange={handleChange}
        />
        <input type="submit" className="search-button" value="Search" />
      </form>
      <div className="userinfo">
        <Profile data={userData} />
        <Bio data={userData} />
        <Stats data={userData} />
        <Links data={userData} />
      </div>
    </div>
  );
}
