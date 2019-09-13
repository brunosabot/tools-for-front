import React from "react";

import CubicBezierBlock from "./components/CubicBezierBlock";
import FormField from "../../components/FormField";
import Group from "../../components/Group";

class BezierCurves extends React.Component {
  static curves = [
    {
      x1: 0,
      y1: 0,
      x2: 1,
      y2: 1
    },
    {
      x1: 0,
      y1: 0,
      x2: 0.2,
      y2: 1
    },
    {
      x1: 0.4,
      y1: 0,
      x2: 0.6,
      y2: 1
    },
    {
      x1: 0.86,
      y1: 0,
      x2: 0.07,
      y2: 1
    },
    {
      x1: 0.22,
      y1: 0.61,
      x2: 0.36,
      y2: 1
    }
  ];

  constructor(props) {
    super(props);

    this.state = {
      x1: 0.25,
      y1: 0.1,
      x2: 0.25,
      y2: 1
    };
  }

  handleX1 = x => {
    this.setState(() => ({ x1: Math.max(0, Math.min(1, parseFloat(x, 10))) }));
  };

  handleY1 = y => {
    this.setState(() => ({ y1: Math.max(0, Math.min(1, parseFloat(y, 10))) }));
  };

  handleX2 = x => {
    this.setState(() => ({ x2: Math.max(0, Math.min(1, parseFloat(x, 10))) }));
  };

  handleY2 = y => {
    this.setState(() => ({ y2: Math.max(0, Math.min(1, parseFloat(y, 10))) }));
  };

  render() {
    const { x1, x2, y1, y2 } = this.state;

    return (
      <div className="page-bezier-curves">
        <Group>
          <FormField type="number" name="x1" label="X1" value={x1} onChange={this.handleX1} />
          <FormField type="number" name="y1" label="Y1" value={y1} onChange={this.handleY1} />
          <FormField type="number" name="x2" label="X2" value={x2} onChange={this.handleX2} />
          <FormField type="number" name="y2" label="Y2" value={y2} onChange={this.handleY2} />
        </Group>
        <Group>
          <CubicBezierBlock x1={x1} y1={y1} x2={x2} y2={y2} />
          {BezierCurves.curves.map(e => (
            <CubicBezierBlock
              key={Object.values(e).join(",")}
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
            />
          ))}
        </Group>
      </div>
    );
  }
}

export default BezierCurves;
