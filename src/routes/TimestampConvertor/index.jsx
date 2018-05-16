import React from "react";

import FormField from "../../components/FormField";
import Group from "../../components/Group";
import TextField from "../../components/TextField";
import TextHuge from "../../components/TextHuge";

import { getDate, getIsoDate, getUtcDate } from "../../lib/date";

class TimestampConverter extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();
    const timestamp = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds(),
      now.getUTCMilliseconds()
    );

    this.state = { timestamp, millisecondMode: true };
  }

  getDateObject() {
    return new Date(parseInt(this.state.timestamp, 10));
  }
  handleTimestamp = timestamp => {
    this.setState(() => ({ timestamp: parseInt(timestamp, 10) }));
  };
  handleYear = value => {
    const d = this.getDateObject();
    d.setUTCFullYear(value);
    this.setState(() => ({ timestamp: d.getTime() }));
  };
  handleMonth = value => {
    const d = this.getDateObject();
    d.setUTCMonth(value - 1);
    this.setState(() => ({ timestamp: d.getTime() }));
  };
  handleDay = value => {
    const d = this.getDateObject();
    d.setUTCDate(value);
    this.setState(() => ({ timestamp: d.getTime() }));
  };
  handleHours = value => {
    const d = this.getDateObject();
    d.setUTCHours(value);
    this.setState(() => ({ timestamp: d.getTime() }));
  };
  handleMinutes = value => {
    const d = this.getDateObject();
    d.setUTCMinutes(value);
    this.setState(() => ({ timestamp: d.getTime() }));
  };
  handleSeconds = value => {
    const d = this.getDateObject();
    d.setSeconds(value);
    this.setState(() => ({ timestamp: d.getTime() }));
  };
  handleMilliseconds = value => {
    const d = this.getDateObject();
    d.setUTCMilliseconds(value);
    this.setState(() => ({ timestamp: d.getTime() }));
  };
  handleMillisecondMode = e => {
    if (e) {
      const timestamp = `${this.state.timestamp}000`;
      this.setState(() => ({ timestamp, millisecondMode: e }));
    } else {
      const d = this.getDateObject();
      d.setUTCMilliseconds(0);
      const time = d.getTime().toString();
      const timestamp = time.substr(0, time.length - 3);
      this.setState(() => ({ timestamp, millisecondMode: e }));
    }
  };

  render() {
    const { timestamp, millisecondMode } = this.state;
    const { year, month, day, hours, minutes, seconds, milliseconds } = getDate(
      timestamp,
      millisecondMode
    );

    return (
      <div className="page-photoshop-shadow">
        <TextHuge>Timestamp Convertor</TextHuge>
        <Group>
          <FormField
            name="timestamp"
            label="Timestamp"
            value={this.state.timestamp}
            type="number"
            onChange={this.handleTimestamp}
          />
        </Group>
        <Group>
          <FormField
            name="millisecondMode"
            label="Milliseconds instead of seconds"
            type="checkbox"
            value={millisecondMode}
            onChange={this.handleMillisecondMode}
          />
        </Group>
        <Group>
          <FormField
            name="year"
            label="Year"
            type="number"
            value={year}
            onChange={this.handleYear}
          />
          <FormField
            name="month"
            label="Month"
            type="number"
            value={month}
            onChange={this.handleMonth}
          />
          <FormField name="day" label="Day" type="number" value={day} onChange={this.handleDay} />
          <FormField
            name="hours"
            label="Hours"
            type="number"
            value={hours}
            onChange={this.handleHours}
          />
          <FormField
            name="minutes"
            label="Minutes"
            type="number"
            value={minutes}
            onChange={this.handleMinutes}
          />
          <FormField
            name="seconds"
            label="Seconds"
            type="number"
            value={seconds}
            onChange={this.handleSeconds}
          />
          {millisecondMode ? (
            <FormField
              name="milliseconds"
              label="Milliseconds"
              type="number"
              value={milliseconds}
              onChange={this.handleMilliseconds}
            />
          ) : null}
        </Group>
        <TextField style={{ fontFamily: "monospace" }}>
          <div>
            <b>ISO :</b> {getIsoDate(timestamp, millisecondMode)}
          </div>
          <div>
            <b>UTC :</b> {getUtcDate(timestamp, millisecondMode)}
          </div>
        </TextField>
      </div>
    );
  }
}

export default TimestampConverter;
