import "./App.css";
import * as React from "react";
//import ReactGA from "react-ga4";
import Home from "./home";

export default function App() {
  //const GA_MEASUREMENT_ID = "G-D9E6DEPHJ9";
  /*ReactGA.initialize("G-D9E6DEPHJ9");
  ReactGA.send(window.location.pathname + window.location.search);
  console.log(window.location.pathname + window.location.search);

  // Send a custom event
  ReactGA.event({
    category: "button",
    action: "click",
    label: "button test", // optional
    //value: 99, // optional, must be a number
    //nonInteraction: true, // optional, true/false
    //transport: "xhr", // optional, beacon/xhr/image
  });

  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home",
  }); */

  return (
    <div className="App">
      <Home />
    </div>
  );
}
