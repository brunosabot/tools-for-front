import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import AppMenu from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const Component = (
    <MemoryRouter>
      <AppMenu />
    </MemoryRouter>
  );
  ReactDOM.render(Component, div);
});
