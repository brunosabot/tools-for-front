import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import AppLink from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const Component = (
    <MemoryRouter>
      <AppLink to="/test" label="Test" />
    </MemoryRouter>
  );
  ReactDOM.render(Component, div);
});

it("renders exact without crashing", () => {
  const div = document.createElement("div");
  const Component = (
    <MemoryRouter>
      <AppLink to="/test" label="Test" exact />
    </MemoryRouter>
  );
  ReactDOM.render(Component, div);
});
