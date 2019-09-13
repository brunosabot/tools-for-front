import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UrlEncodeDecode from ".";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UrlEncodeDecode />, div);
});

it("Handle change of the Encode input field", () => {
  const route = mount(<UrlEncodeDecode />);
  const input = route.find("#form-field-encoded");

  input.simulate("change", {
    target: { value: "https%3A%2F%2Ftools.brunosabot.com%2F%23%2Ftimestamp" }
  });

  expect(route.state("url")).toBe("https://tools.brunosabot.com/#/timestamp");
});

it("Handle change of the Decode input field", () => {
  const route = mount(<UrlEncodeDecode />);
  const input = route.find("#form-field-decoded");

  input.simulate("change", {
    target: { value: "https://tools.brunosabot.com/#/timestamp" }
  });

  expect(route.state("url")).toBe("https://tools.brunosabot.com/#/timestamp");
});
