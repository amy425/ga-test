import "./App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
