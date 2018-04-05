import React from "react";
import PropTypes from "prop-types";

const CubicBezierSvg = ({ x1, y1, x2, y2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 110 110"
    xmlSpace="preserve"
    height="100px"
    width="100px"
  >
    <path
      stroke="#ffb010"
      strokeWidth="4"
      fill="none"
      d={`M5 105C${x1 * 100 + 5} ${105 - y1 * 100},${105 - x2 * 100} ${y2 * 100 + 5},105 5`}
    />
  </svg>
);

CubicBezierSvg.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired
};

export default CubicBezierSvg;
