import React from "react";
import PropTypes from "prop-types";

import styles from "./TextField.module.css";

const Group = ({ children }) => <div className={styles.root}>{children}</div>;

Group.propTypes = {
  children: PropTypes.node.isRequired
};

export default Group;
