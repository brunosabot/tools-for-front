import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pretty from ".";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Pretty />, div);
});

it("Handle change of the Unformatted input field", () => {
  const route = mount(<Pretty />);
  const input = route.find("#form-field-unformatted");

  input.simulate("change", { target: { value: '{"test":"test"}' } });

  expect(route.state("value")).toBe('{"test":"test"}');
});
