import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styles from "./AppLink.module.css";

const AppLink = ({ to, exact, label }) => (
  <NavLink className={styles.root} activeClassName={styles.rootActive} exact={exact} to={to}>
    {label}
  </NavLink>
);

AppLink.defaultProps = {
  exact: false
};

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  label: PropTypes.string.isRequired
};

export default AppLink;
