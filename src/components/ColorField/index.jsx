import React from "react";
import PropTypes from "prop-types";

import styles from "./ColorField.module.css";

const ColorField = ({ color }) => (
  <div className={styles.root}>
    <span className={styles.legend}>&nbsp;</span>
    <div className={styles.value} style={{ backgroundColor: color }} />
  </div>
);

ColorField.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorField;
