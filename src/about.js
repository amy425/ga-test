import "./App.css";
import * as React from "react";
import HeaderBar from "./header";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <HeaderBar />
      <h1>About</h1>
      <Link to="/">
        <button>Go to home (from about)</button>
      </Link>
    </div>
  );
}
