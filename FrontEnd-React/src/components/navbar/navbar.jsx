import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>Navbar</h1>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leader Board</Link>
          <Link to="/announcement">Announcement</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
