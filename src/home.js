import "./App.css";
import * as React from "react";
import HeaderBar from "./header";
import { Link } from "react-router-dom";

export default function Home() {
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
