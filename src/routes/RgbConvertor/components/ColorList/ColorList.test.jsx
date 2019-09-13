import React from "react";
import ReactDOM from "react-dom";
import ColorList from ".";

it("renders without crashing", () => {
  const div = document.createElement("tbody");
  ReactDOM.render(<ColorList hex="000000" onRemove={() => {}} />, div);
});
