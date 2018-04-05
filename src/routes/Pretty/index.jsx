import React from "react";

import FormField from "../../components/FormField";
import Group from "../../components/Group";
import TextHuge from "../../components/TextHuge";

class Pretty extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "", valid: false };

    this.handleUnformatted = this.handleUnformatted.bind(this);
  }

  handleUnformatted(value) {
    let valid = true;

    try {
      JSON.stringify(JSON.parse(value));
    } catch (e) {
      valid = false;
    }

    this.setState(() => ({ value, valid }));
  }

  render() {
    const { valid, value } = this.state;

    return (
      <div className="page-base-64">
        <TextHuge>Prettify JSON</TextHuge>
        <Group>
          <FormField
            name="unformatted"
            label="Unformatted string"
            value={value}
            onChange={this.handleUnformatted}
          />
        </Group>
        <Group>
          <pre style={{ width: "100%" }}>
            {valid ? JSON.stringify(JSON.parse(value), null, 2) : value}
          </pre>
        </Group>
      </div>
    );
  }
}

export default Pretty;
