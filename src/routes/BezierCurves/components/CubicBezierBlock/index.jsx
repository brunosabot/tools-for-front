import React from "react";
import PropTypes from "prop-types";

import CubicBezierSvg from "../CubicBezierSvg";

import styles from "./CubicBezierBlock.module.css";

const CubicBezierBlock = ({ x1, x2, y1, y2 }) => (
  <div className={styles.root} key={`${x1} ${y1},${x2} ${y2}`}>
    <CubicBezierSvg x1={x1} y1={y1} x2={x2} y2={y2} />
    <div className={styles.legend}>
      cubic-bezier(
      {x1}
      , &nbsp;
      {y1}
      , &nbsp;
      {x2}
      , &nbsp;
      {y2}
      )
    </div>
    <div
      className={styles.sample}
      style={{
        transitionTimingFunction: `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`
      }}
    />
  </div>
);

CubicBezierBlock.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired
};

export default CubicBezierBlock;
