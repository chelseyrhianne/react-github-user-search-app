import React from "react";
import Header from "./Header.js";
import User from "./User.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <User defaultUser="octocat" />
      <Footer />
    </div>
  );
}

export default App;
