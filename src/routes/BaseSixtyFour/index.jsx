import React from "react";

import FormField from "../../components/FormField";
import Group from "../../components/Group";
import TextHuge from "../../components/TextHuge";

class BaseSixtyFour extends React.Component {
  constructor(props) {
    super(props);

    this.state = { string: "", valid: true };

    this.handleEncoded = this.handleEncoded.bind(this);
    this.handleDecoded = this.handleDecoded.bind(this);
  }

  handleEncoded(string) {
    try {
      const newString = btoa(atob(string));
      if (newString === string) {
        // For some reasons, atob() convert sometimes to a wrong value.
        // We make sure decode then encode gives us the same result
        this.setState(() => ({ string: atob(string), valid: true }));
      } else {
        this.setState(() => ({ string, valid: false }));
      }
    } catch (e) {
      this.setState(() => ({ string, valid: false }));
    }
  }
  handleDecoded(string) {
    this.setState(() => ({ string }));
  }

  render() {
    return (
      <div className="page-base-64">
        <TextHuge>Encode / Decode an string</TextHuge>
        <Group>
          <FormField
            name="encoded"
            label="Encoded string"
            value={this.state.valid ? btoa(this.state.string) : this.state.string}
            onChange={this.handleEncoded}
          />
        </Group>
        <Group>
          <FormField
            name="decoded"
            label="Decoded string"
            value={this.state.string}
            onChange={this.handleDecoded}
          />
        </Group>
      </div>
    );
  }
}

export default BaseSixtyFour;
