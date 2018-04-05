import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BaseSixtyFour from "./";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BaseSixtyFour />, div);
});

it("Handle change of the Encode input field", () => {
  const route = mount(<BaseSixtyFour />);
  const input = route.find("#form-field-encoded");

  input.simulate("change", { target: { value: "VG9vbHM=" } });

  expect(route.state("string")).toBe("Tools");
});

it("Handle change of the Decode input field", () => {
  const route = mount(<BaseSixtyFour />);
  const input = route.find("#form-field-decoded");

  input.simulate("change", { target: { value: "Tools" } });

  expect(route.state("string")).toBe("Tools");
});
