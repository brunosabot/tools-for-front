import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BezierCurves from "./";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BezierCurves />, div);
});

it("Handle change of the X1 input field", () => {
  const route = mount(<BezierCurves />);
  const input = route.find("#form-field-x1");

  input.simulate("change", { target: { value: "0.4" } });

  expect(route.state("x1")).toBe(0.4);
});

it("Handle change of the Y1 input field", () => {
  const route = mount(<BezierCurves />);
  const input = route.find("#form-field-y1");

  input.simulate("change", { target: { value: "0.4" } });

  expect(route.state("y1")).toBe(0.4);
});

it("Handle change of the X2 input field", () => {
  const route = mount(<BezierCurves />);
  const input = route.find("#form-field-x2");

  input.simulate("change", { target: { value: "0.4" } });

  expect(route.state("x2")).toBe(0.4);
});

it("Handle change of the Y2 input field", () => {
  const route = mount(<BezierCurves />);
  const input = route.find("#form-field-y2");

  input.simulate("change", { target: { value: "0.4" } });

  expect(route.state("y2")).toBe(0.4);
});
