import React from "react";
import PropTypes from "prop-types";

import { hexToName, hexToRGB, hexToCMYK } from "../../../../lib/color";

import ColorField from "../../../../components/ColorField/index";

const ColorList = ({ hex, onRemove }) => {
  const name = hexToName(hex);
  const rgb = hexToRGB(hex);
  const cmyk = hexToCMYK(hex);

  return (
    <tr key={hex}>
      <td>
        <ColorField color={`#${hex}`} />
      </td>
      <td>
#
        {hex}
      </td>
      <td>
        rgb(
        {rgb[0]}
, 
        {' '}
        {rgb[1]}
, 
        {' '}
        {rgb[2]}
)
      </td>
      <td>
        cmyk(
        {cmyk[0]}
, 
        {' '}
        {cmyk[1]}
, 
        {' '}
        {cmyk[2]}
, 
        {' '}
        {cmyk[3]}
)
      </td>
      <td>{name}</td>
      <td>
        <div
          onKeyUp={e => {
            if (e.keyCode === 13) {
              onRemove();
            }
          }}
          onClick={onRemove}
          role="button"
          tabIndex="-1"
        >
          X
        </div>
      </td>
    </tr>
  );
};

ColorList.propTypes = {
  hex: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default ColorList;
