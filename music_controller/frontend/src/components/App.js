import React, { Component, useEffect } from "react";
import { render } from "react-dom";

export const App = () => {
  useEffect(() => {
    return fetch("api/room", {
      method: "GET",
      // body: {},
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return <div>test</div>;
};

const appDiv = document.getElementById("app");
render(<App />, appDiv);
