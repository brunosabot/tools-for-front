import React from "react";
import PropTypes from "prop-types";

import styles from "./TextField.module.css";

const Group = ({ style, children }) => (
  <div className={styles.root} style={style}>
    {children}
  </div>
);

Group.propTypes = {
  children: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string)
};

Group.defaultProps = {
  children: "",
  style: {}
};

export default Group;
