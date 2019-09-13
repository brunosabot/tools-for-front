import React from "react";

import { PropTypes } from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, onClick }) => (
  <div role="button" tabIndex={-1} onKeyPress={() => {}} onClick={onClick} className={styles.root}>
    {children}
  </div>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
