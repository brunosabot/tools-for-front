import React from "react";
import ReactDOM from "react-dom";
import TextHuge from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextHuge />, div);
});
