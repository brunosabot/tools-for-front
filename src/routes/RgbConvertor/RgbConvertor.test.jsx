import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RgbConvertor from "./";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RgbConvertor />, div);
});

it("Handle change of the R input field", () => {
  const route = mount(<RgbConvertor />);
  const input = route.find("#form-field-r");

  input.simulate("change", { target: { value: "200" } });

  expect(route.state("r")).toBe(200);
});

it("Handle change of the G input field", () => {
  const route = mount(<RgbConvertor />);
  const input = route.find("#form-field-g");

  input.simulate("change", { target: { value: "200" } });

  expect(route.state("g")).toBe(200);
});

it("Handle change of the B input field", () => {
  const route = mount(<RgbConvertor />);
  const input = route.find("#form-field-b");

  input.simulate("change", { target: { value: "200" } });

  expect(route.state("b")).toBe(200);
});

it("Handle change of the C input field", () => {
  const route = mount(<RgbConvertor />);
  const input = route.find("#form-field-c");

  input.simulate("change", { target: { value: "0.1111" } });

  expect(route.state("c")).toBe(0.1111);
});

it("Handle change of the M input field", () => {
  const route = mount(<RgbConvertor />);
  const input = route.find("#form-field-m");

  input.simulate("change", { target: { value: "0.1111" } });

  expect(route.state("m")).toBe(0.1111);
});

it("Handle change of the Y input field", () => {
  const route = mount(<RgbConvertor />);
  const input = route.find("#form-field-y");

  input.simulate("change", { target: { value: "0.1111" } });

  expect(route.state("y")).toBe(0.1111);
});

it("Handle change of the K input field", () => {
  const route = mount(<RgbConvertor />);
  const input = route.find("#form-field-k");

  input.simulate("change", { target: { value: "0.1111" } });

  expect(route.state("k")).toBe(0.1111);
});

it("Handle change of the Hex input field", () => {
  const route = mount(<RgbConvertor />);
  const input = route.find("#form-field-hex");

  input.simulate("change", { target: { value: "ffb010" } });

  expect(route.state("hex")).toBe("ffb010");
});
