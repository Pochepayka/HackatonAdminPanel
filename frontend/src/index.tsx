import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


import "./index.css";
import { App } from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//ReactDOM.render(<App />, document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
