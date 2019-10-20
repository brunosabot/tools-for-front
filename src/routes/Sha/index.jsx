import React from "react";
import shajs from "sha.js";

import FormField from "../../components/FormField";
import SelectField from "../../components/SelectField";
import TextField from "../../components/TextField";
import Group from "../../components/Group";
import TextHuge from "../../components/TextHuge/index";

const selectValues = [
  { value: "sha", label: "SHA" },
  { value: "sha1", label: "SHA-1" },
  { value: "sha224", label: "SHA-224" },
  { value: "sha256", label: "SHA-256" },
  { value: "sha384", label: "SHA-384" },
  { value: "sha512", label: "SHA-512" }
];

class Sha extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      type: "sha256"
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  getHash() {
    const { input, type } = this.state;

    return shajs(type)
      .update(input)
      .digest("hex");
  }

  handleInput(input) {
    this.setState(() => ({ input }));
  }

  handleType(type) {
    this.setState(() => ({ type }));
  }

  render() {
    const { input, type } = this.state;
    return (
      <div>
        <TextHuge>SHA</TextHuge>
        <Group>
          <FormField name="input" label="Input" defaultValue={input} onChange={this.handleInput} />
          <SelectField
            name="type"
            label="Type"
            value={type}
            options={selectValues}
            onChange={this.handleType}
          />
        </Group>
        <TextField>{this.getHash()}</TextField>
      </div>
    );
  }
}

export default Sha;
