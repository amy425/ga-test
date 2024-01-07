import "./App.css";
import * as React from "react";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <div className="HeaderBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default HeaderBar;
