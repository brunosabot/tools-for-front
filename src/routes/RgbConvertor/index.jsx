import React from "react";

import FormField from "../../components/FormField";
import Group from "../../components/Group";
import TextField from "../../components/TextField";
import TextHuge from "../../components/TextHuge";
import ColorField from "../../components/ColorField";
import Button from "../../components/Button";

import {
  hexToName,
  RGBToCMYK,
  RGBToHex,
  hexToRGB,
  hexToCMYK,
  CMYKToRGB,
  CMYKToHex
} from "../../lib/color";
import ColorList from "./components/ColorList";

class RgbConvertor extends React.Component {
  constructor(props) {
    super(props);

    const r = 0;
    const g = 0;
    const b = 0;
    const c = 0;
    const y = 0;
    const m = 0;
    const k = 0;
    const hex = "000000";

    this.state = {
      r,
      g,
      b,
      c,
      y,
      m,
      k,
      hex,
      saves: []
    };
  }

  componentDidMount() {
    this.loadSaves();
  }

  loadSaves = () => {
    this.setState({
      saves: JSON.parse(localStorage.getItem("rgbConvertor") || "[]")
    });
  };

  handleR = r => {
    this.rgb({ r: parseInt(r, 10) });
  };
  handleG = g => {
    this.rgb({ g: parseInt(g, 10) });
  };
  handleB = b => {
    this.rgb({ b: parseInt(b, 10) });
  };
  handleC = c => {
    this.cmyk({ c: parseFloat(c) });
  };
  handleY = y => {
    this.cmyk({ y: parseFloat(y) });
  };
  handleM = m => {
    this.cmyk({ m: parseFloat(m) });
  };
  handleK = k => {
    this.cmyk({ k: parseFloat(k) });
  };
  handleHex = hex => {
    this.hex(hex);
  };

  rgb({ r = this.state.r, g = this.state.g, b = this.state.b }) {
    const [c, y, m, k] = RGBToCMYK(r, g, b);
    const hex = RGBToHex(r, g, b);

    this.setState(() => ({
      r,
      g,
      b,
      c,
      y,
      m,
      k,
      hex
    }));
  }

  cmyk({ c = this.state.c, m = this.state.m, y = this.state.y, k = this.state.k }) {
    const [r, g, b] = CMYKToRGB(c, m, y, k);
    const hex = CMYKToHex(c, m, y, k);

    this.setState(() => ({
      r,
      g,
      b,
      c,
      y,
      m,
      k,
      hex
    }));
  }

  hex(hex) {
    const [r, g, b] = hexToRGB(hex);
    const [c, m, y, k] = hexToCMYK(hex);

    this.setState(() => ({
      r,
      g,
      b,
      c,
      y,
      m,
      k,
      hex
    }));
  }

  saveLocalStorage = () => {
    const newRgbSaves = new Set(this.state.saves);
    newRgbSaves.add(this.state.hex);
    localStorage.setItem("rgbConvertor", JSON.stringify([...newRgbSaves]));
    this.loadSaves();
  };

  removeLocalStorage = hex => () => {
    const newRgbSaves = new Set(this.state.saves);
    newRgbSaves.delete(hex);
    localStorage.setItem("rgbConvertor", JSON.stringify([...newRgbSaves]));
    this.loadSaves();
  };

  render() {
    const colorName = hexToName(this.state.hex);

    return (
      <div className="page-photoshop-shadow">
        <TextHuge>RGB &lt;&gt; CMYK &lt;&gt; Hex</TextHuge>
        <Group>
          <FormField
            type="number"
            name="r"
            label="R"
            value={this.state.r}
            onChange={this.handleR}
          />
          <FormField
            type="number"
            name="g"
            label="G"
            value={this.state.g}
            onChange={this.handleG}
          />
          <FormField
            type="number"
            name="b"
            label="B"
            value={this.state.b}
            onChange={this.handleB}
          />
        </Group>
        <Group>
          <FormField
            type="number"
            name="c"
            label="C"
            value={this.state.c}
            onChange={this.handleC}
          />
          <FormField
            type="number"
            name="y"
            label="Y"
            value={this.state.y}
            onChange={this.handleY}
          />
          <FormField
            type="number"
            name="m"
            label="M"
            value={this.state.m}
            onChange={this.handleM}
          />
          <FormField
            type="number"
            name="k"
            label="K"
            value={this.state.k}
            onChange={this.handleK}
          />
        </Group>
        <Group>
          <FormField name="hex" label="Hex" value={this.state.hex} onChange={this.handleHex} />
          <ColorField color={`#${this.state.hex}`} />
        </Group>
        {colorName ? <TextField>{colorName}</TextField> : ""}
        <Button onClick={this.saveLocalStorage}>Save</Button>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Hex</th>
              <th>RGB</th>
              <th>CMYK</th>
              <th>Name</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.state.saves.map(hex => (
              <ColorList hex={hex} key={hex} onRemove={this.removeLocalStorage(hex)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RgbConvertor;
