import React from "react";
import PropTypes from "prop-types";

import styles from "./Group.module.css";

const Group = ({ children }) => <div className={styles.root}>{children}</div>;

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

Group.defaultProps = {
  children: ""
};

export default Group;
