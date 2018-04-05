import React from "react";
import ReactDOM from "react-dom";
import ColorField from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ColorField color="#ffffff" />, div);
});
