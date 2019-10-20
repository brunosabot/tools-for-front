import React from "react";
import PropTypes from "prop-types";

import styles from "./CubicBezierGroup.module.css";

const CubicBezierGroup = ({ children }) => (
  <div className={styles.CubicBezierGroup}>{children}</div>
);

CubicBezierGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default CubicBezierGroup;
