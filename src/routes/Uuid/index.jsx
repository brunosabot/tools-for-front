import React from "react";
import uuidv1 from "uuid/v1";
import uuidv4 from "uuid/v4";

import SelectField from "../../components/SelectField";
import TextField from "../../components/TextField";
import Group from "../../components/Group";
import Button from "../../components/Button/index";

const selectValues = [
  { value: "uuidv1", label: "UUID version 1" },
  { value: "uuidv4", label: "UUID version 4" }
];

class Uuid extends React.PureComponent {
  state = { type: "uuidv4" };

  getUuid() {
    if (this.state.type === "uuidv1") {
      return uuidv1();
    } else if (this.state.type === "uuidv4") {
      return uuidv4();
    }

    return "";
  }

  handleType = type => {
    this.setState(() => ({ type }));
  };

  update = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <React.Fragment>
        <Group>
          <SelectField
            name="type"
            label="Type"
            value={this.state.type}
            options={selectValues}
            onChange={this.handleType}
          />
        </Group>
        <TextField>{this.getUuid()}</TextField>
        <Button onClick={this.update}>New UUID</Button>
      </React.Fragment>
    );
  }
}

export default Uuid;
