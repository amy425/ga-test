import "./App.css";
import * as React from "react";
import HeaderBar from "./header";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

export default function About() {
  ReactGA.pageview(window.location.pathname + window.location.search);
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
