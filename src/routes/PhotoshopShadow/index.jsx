import React from "react";

import FormField from "../../components/FormField";
import Group from "../../components/Group";
import TextField from "../../components/TextField";
import TextHuge from "../../components/TextHuge";

import { getBoxShadow, getBoxShadowValue } from "../../lib/photoshop";
import { getRGBA } from "../../lib/color";

class PhotoshopShadow extends React.Component {
  constructor(props) {
    super(props);

    const angle = 90;
    const distance = 3;
    const spread = 0;
    const size = 7;
    const inner = false;
    const r = 0;
    const g = 0;
    const b = 0;
    const opacity = 75;

    this.state = {
      angle,
      distance,
      size,
      spread,
      inner,
      r,
      g,
      b,
      opacity
    };
  }

  handleAngle = angle => {
    this.setState(() => ({ angle: parseInt(angle, 10) || 0 }));
  };
  handleDistance = d => {
    this.setState(() => ({ distance: parseInt(d, 10) || 0 }));
  };
  handleSpread = spread => {
    this.setState(() => ({ spread: parseInt(spread, 10) || 0 }));
  };
  handleSize = size => {
    this.setState(() => ({ size: parseInt(size, 10) || 0 }));
  };
  handleInner = inner => {
    this.setState(() => ({ inner: parseInt(inner, 10) || false }));
  };
  handleR = r => {
    this.setState(() => ({ r: parseInt(r, 10) || 0 }));
  };
  handleG = g => {
    this.setState(() => ({ g: parseInt(g, 10) || 0 }));
  };
  handleB = b => {
    this.setState(() => ({ b: parseInt(b, 10) || 0 }));
  };
  handleOpacity = opacity => {
    this.setState(() => ({ opacity: parseInt(opacity, 10) || 0 }));
  };

  render() {
    const { angle, distance, size, spread, inner, r, g, b, opacity } = this.state;
    const color = getRGBA(r, g, b, opacity);

    return (
      <div className="page-photoshop-shadow">
        <TextHuge>Convert Photoshop shadow to CSS</TextHuge>
        <Group>
          <FormField
            type="number"
            name="r"
            label="R"
            defaultValue={this.state.r}
            onChange={this.handleR}
          />
          <FormField
            type="number"
            name="g"
            label="G"
            defaultValue={this.state.g}
            onChange={this.handleG}
          />
          <FormField
            type="number"
            name="b"
            label="B"
            defaultValue={this.state.b}
            onChange={this.handleB}
          />
          <FormField
            type="number"
            name="opacity"
            label="Opacity"
            defaultValue={this.state.opacity}
            onChange={this.handleOpacity}
          />
        </Group>
        <Group>
          <FormField
            name="angle"
            label="Angle"
            type="number"
            defaultValue={this.state.angle}
            onChange={this.handleAngle}
          />
          <FormField
            name="distance"
            label="Distance"
            type="number"
            defaultValue={this.state.distance}
            onChange={this.handleDistance}
          />
          <FormField
            name="spread"
            label="Spread"
            type="number"
            defaultValue={this.state.spread}
            onChange={this.handleSpread}
          />
          <FormField
            name="size"
            label="Size"
            type="number"
            defaultValue={this.state.size}
            onChange={this.handleSize}
          />
        </Group>
        <Group>
          <FormField
            name="inner"
            label="Inner shadow"
            type="checkbox"
            onChange={this.handleInner}
          />
        </Group>
        <TextField
          style={{
            boxShadow: getBoxShadowValue(angle, distance, size, spread, inner, color)
          }}
        >
          {getBoxShadow(angle, distance, size, spread, inner, color)}
        </TextField>
      </div>
    );
  }
}

export default PhotoshopShadow;
