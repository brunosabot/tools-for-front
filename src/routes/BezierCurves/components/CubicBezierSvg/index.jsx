import React from "react";
import PropTypes from "prop-types";

const getPointX = (width, x) => x * width;

// In this SVG y = 0 should be at the bottom,
// so every y point is substracted from the height
const getPointY = (height, y) => height - y * height;

const withOffset = (offset, value) => offset + value;

const CubicBezierSvg = ({ x1, y1, x2, y2 }) => {
  const x0 = 0;
  const y0 = 0;
  const x3 = 1;
  const y3 = 1;
  const width = 100;
  const height = 100;
  const offset = 2;

  const vwidth = width + offset * 2;
  const vheight = height + offset * 2;

  // Initial point
  const p0x = withOffset(offset, getPointX(width, x0));
  const p0y = withOffset(offset, getPointY(height, y0));

  // Start transition point
  const p1x = withOffset(offset, getPointX(width, x1));
  const p1y = withOffset(offset, getPointY(height, y1));

  // End transition point
  const p2x = withOffset(offset, getPointX(width, x2));
  const p2y = withOffset(offset, getPointY(height, y2));

  // Final point
  const p3x = withOffset(offset, getPointX(width, x3));
  const p3y = withOffset(offset, getPointY(height, y3));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${vwidth} ${vheight}`}
      xmlSpace="preserve"
      height={`${height}px`}
      width={`${width}px`}
    >
      <path
        stroke="#ffb010"
        strokeWidth="3"
        fill="none"
        d={`M${p0x} ${p0y} C ${p1x} ${p1y}, ${p2x} ${p2y}, ${p3x} ${p3y}`}
      />
    </svg>
  );
};

CubicBezierSvg.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired
};

export default CubicBezierSvg;
