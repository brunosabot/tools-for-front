import React from "react";
import ReactDOM from "react-dom";

import SelectField from "./";

test("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <SelectField
      label="Test"
      name="test"
      onChange={() => {}}
      options={[
        {
          label: "test",
          value: "Test"
        }
      ]}
    />,
    div
  );
});
