import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styles from "./AppLink.module.css";

const AppLink = ({ to, exact, label }) => {
  const args = {
    className: styles.root,
    activeClassName: styles.rootActive,
    to
  };
  if (exact) {
    args.exact = true;
  }

  return <NavLink {...args}>{label}</NavLink>;
};

AppLink.defaultProps = {
  exact: false
};

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  label: PropTypes.string.isRequired
};

export default AppLink;
