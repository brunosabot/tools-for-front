import React from "react";

import FormField from "../../components/FormField";
import Group from "../../components/Group";
import TextHuge from "../../components/TextHuge";

import { encode, decode } from "../../lib/url";

class UrlEncodeDecode extends React.Component {
  constructor(props) {
    super(props);

    this.state = { url: "" };

    this.handleEncoded = this.handleEncoded.bind(this);
    this.handleDecoded = this.handleDecoded.bind(this);
  }

  handleEncoded(url) {
    this.setState(() => ({ url: decode(url) }));
  }

  handleDecoded(url) {
    this.setState(() => ({ url }));
  }

  render() {
    const { url } = this.state;
    return (
      <div className="page-photoshop-shadow">
        <TextHuge>Encode / Decode an URL</TextHuge>
        <Group>
          <FormField
            name="encoded"
            label="Encoded URL"
            value={encode(url)}
            onChange={this.handleEncoded}
          />
        </Group>
        <Group>
          <FormField name="decoded" label="Decoded URL" value={url} onChange={this.handleDecoded} />
        </Group>
      </div>
    );
  }
}

export default UrlEncodeDecode;
