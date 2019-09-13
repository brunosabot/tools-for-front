import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FormField from ".";

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormField label="Test" name="test" onChange={() => {}} />, div);
});

test("renders type=text without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormField label="Test" name="test" onChange={() => {}} type="text" />, div);
});

test("renders type=number without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormField label="Test" name="test" onChange={() => {}} type="number" />, div);
});

test("renders type=checkbox without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormField label="Test" name="test" onChange={() => {}} type="checkbox" />, div);
});

test("renders type=radio without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormField label="Test" name="test" onChange={() => {}} type="radio" />, div);
});

test("renders className without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <FormField label="Test" name="test" onChange={() => {}} className="test-class" />,
    div
  );
});

test("renders radio + className without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <FormField label="Test" name="test" onChange={() => {}} type="radio" className="test-class" />,
    div
  );
});

test("Update props being applied", () => {
  const component = shallow(
    <FormField label="Test" name="test" onChange={() => {}} type="radio" />
  );

  expect(component.find("label").prop("htmlFor")).toBe("form-field-test");
  expect(component.find("label").text()).toBe("Test");
  expect(component.find("input").prop("type")).toBe("radio");

  component.setProps({
    label: "Test2",
    name: "test2",
    type: "text"
  });

  expect(component.find("label").prop("htmlFor")).toBe("form-field-test2");
  expect(component.find("label").text()).toBe("Test2");
  expect(component.find("input").prop("type")).toBe("text");
});

test("updates values", () => {
  const component = renderer.create(
    <FormField label="Test" name="test" onChange={() => {}} type="text" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.value = "New Value";
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.value = "";
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Change checkbox after click", () => {
  const onChange = jest.fn();
  const checkbox = shallow(
    <FormField label="Test" name="test" onChange={onChange} type="checkbox" />
  );

  const input = checkbox.find("input");

  input.simulate("change", {
    target: { checked: input.getElement().props.checked }
  });
  expect(onChange).toHaveBeenCalled();
});

test("Update value", () => {
  const onChange = jest.fn();
  const checkbox = shallow(
    <FormField label="Test" name="test" value={false} onChange={onChange} type="checkbox" />
  );

  expect(checkbox.find("input").prop("checked")).toBe(false);
  checkbox.setProps({ value: true });
  expect(checkbox.find("input").prop("checked")).toBe(true);
});
