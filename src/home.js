import "./App.css";
import * as React from "react";
import HeaderBar from "./header";
import { Link } from "react-router-dom";
import GoogleAnalyticsScript from "./google";

export default function Home() {
  function handleClick(e) {
    console.log(e);
    console.log(e.target);
  }

  return (
    <div className="Home">
      <HeaderBar />
      <h1>Home</h1>
      <Link to="/about" onClick={handleClick}>
        <button>Go to about (from home)</button>
      </Link>
      <GoogleAnalyticsScript enabled={true} />
    </div>
  );
}
