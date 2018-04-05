import React from "react";
import ReactDOM from "react-dom";
import CubicBezierSvg from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CubicBezierSvg x1={0} y1={0} x2={0.2} y2={1} />, div);
});
