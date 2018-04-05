import React from "react";
import PropTypes from "prop-types";

import styles from "./TextHuge.module.css";

const TextHuge = ({ children }) => <div className={styles.root}>{children}</div>;

TextHuge.propTypes = {
  children: PropTypes.string
};

TextHuge.defaultProps = {
  children: ""
};

export default TextHuge;
