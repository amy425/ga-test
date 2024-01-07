import "./App.css";
import * as React from "react";
import ReactGA from "react-ga4";
import Home from "./home";

export default function App() {
  const MEASUREMENT_ID = "G-D9E6DEPHJ9";
  ReactGA.initialize(MEASUREMENT_ID, { debug: true });

  // Send a custom event
  ReactGA.event({
    category: "your category",
    action: "your action",
    label: "your label", // optional
    value: 99, // optional, must be a number
    nonInteraction: true, // optional, true/false
    transport: "xhr", // optional, beacon/xhr/image
  });

  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home",
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
}
