import React, { Component } from "react";
import { render } from "react-dom";

export const App = () => {
  return <div>test</div>;
};

const appDiv = document.getElementById("app");
render(<App />, appDiv);
