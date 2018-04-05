import React from "react";
import PropTypes from "prop-types";

import CubicBezierSvg from "../CubicBezierSvg";

import styles from "./CubicBezierBlock.module.css";

const CubicBezierBlock = e => (
  <div className={styles.root} key={`${e.x1} ${e.y1},${e.x2} ${e.y2}`}>
    <CubicBezierSvg {...e} />
    <div className={styles.legend}>
      cubic-bezier({e.x1}, {e.y1}, {e.x2}, {e.y2})
    </div>
    <div
      className={styles.sample}
      style={{
        transitionTimingFunction: `cubic-bezier(${e.x1}, ${e.y1}, ${e.x2}, ${e.y2})`
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
