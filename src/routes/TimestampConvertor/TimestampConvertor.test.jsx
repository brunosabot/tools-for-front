import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TimestampConvertor from "./";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TimestampConvertor />, div);
});

it("Handle change of the Timestamp input field", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-timestamp");

  input.simulate("change", { target: { value: "1234567890" } });

  expect(route.state("timestamp")).toBe(1234567890);
});

it("Handle change of the Year input field", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-year");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { value: "2016" } });

  expect(route.state("timestamp")).toBe(1451606401000);
});

it("Handle change of the Month input field", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-month");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { value: "06" } });

  expect(route.state("timestamp")).toBe(13046401000);
});

it("Handle change of the Day input field", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-day");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { value: "29" } });

  expect(route.state("timestamp")).toBe(2419201000);
});

it("Handle change of the Hour input field", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-hours");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { value: "20" } });

  expect(route.state("timestamp")).toBe(72001000);
});

it("Handle change of the Minutes input field", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-minutes");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { value: "25" } });

  expect(route.state("timestamp")).toBe(1501000);
});

it("Handle change of the Seconds input field", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-seconds");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { value: "25" } });

  expect(route.state("timestamp")).toBe(25000);
});

it("Handle change of the Milliseconds input field", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-milliseconds");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { value: "519" } });

  expect(route.state("timestamp")).toBe(1519);
});

it("Handle change of the Milliseconds mode input field to true", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-millisecondMode");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { checked: true } });

  expect(route.state("millisecondMode")).toBe(true);
});

it("Handle change of the Milliseconds mode input field to false", () => {
  const route = mount(<TimestampConvertor />);
  const input = route.find("#form-field-millisecondMode");
  const date = new Date("Thu Jan 01 1970 00:00:01 GMT");
  route.setState(() => ({ timestamp: date.getTime() }));

  input.simulate("change", { target: { checked: false } });

  expect(route.state("millisecondMode")).toBe(false);
});
