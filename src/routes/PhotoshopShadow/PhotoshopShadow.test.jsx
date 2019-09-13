import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PhotoshopShadow from ".";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PhotoshopShadow />, div);
});

it("Handle change of the Angle input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-angle");

  input.simulate("change", { target: { value: "90" } });
  expect(route.state("angle")).toBe(90);

  input.simulate("change", { target: { value: "" } });
  expect(route.state("angle")).toBe(0);
});

it("Handle change of the Distance input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-distance");

  input.simulate("change", { target: { value: "10" } });
  expect(route.state("distance")).toBe(10);

  input.simulate("change", { target: { value: "" } });
  expect(route.state("distance")).toBe(0);
});

it("Handle change of the Spread input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-spread");

  input.simulate("change", { target: { value: "10" } });
  expect(route.state("spread")).toBe(10);

  input.simulate("change", { target: { value: "" } });
  expect(route.state("spread")).toBe(0);
});

it("Handle change of the Size input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-size");

  input.simulate("change", { target: { value: "10" } });
  expect(route.state("size")).toBe(10);

  input.simulate("change", { target: { value: "" } });
  expect(route.state("size")).toBe(0);
});

it("Handle change of the Inner input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-inner");

  input.simulate("change", { target: { checked: false } });

  expect(route.state("inner")).toBe(false);
});

it("Handle change of the R input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-r");

  input.simulate("change", { target: { value: "200" } });
  expect(route.state("r")).toBe(200);

  input.simulate("change", { target: { value: "" } });
  expect(route.state("r")).toBe(0);
});

it("Handle change of the G input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-g");

  input.simulate("change", { target: { value: "200" } });
  expect(route.state("g")).toBe(200);

  input.simulate("change", { target: { value: "" } });
  expect(route.state("g")).toBe(0);
});

it("Handle change of the B input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-b");

  input.simulate("change", { target: { value: "200" } });
  expect(route.state("b")).toBe(200);

  input.simulate("change", { target: { value: "" } });
  expect(route.state("b")).toBe(0);
});

it("Handle change of the Opacity input field", () => {
  const route = mount(<PhotoshopShadow />);
  const input = route.find("#form-field-opacity");

  input.simulate("change", { target: { value: "30" } });
  expect(route.state("opacity")).toBe(30);

  input.simulate("change", { target: { value: "" } });
  expect(route.state("opacity")).toBe(0);
});
