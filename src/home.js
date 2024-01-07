import "./App.css";
import * as React from "react";
import HeaderBar from "./header";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

export default function Home() {
  const MEASUREMENT_ID = "G-D9E6DEPHJ9";
  ReactGA.initialize(MEASUREMENT_ID, { debug: true });
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="Home">
      <HeaderBar />
      <h1>Home</h1>
      <Link to="/about">
        <button>Go to about (from home)</button>
      </Link>
    </div>
  );
}
