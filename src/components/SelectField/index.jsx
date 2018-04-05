import React from "react";
import PropTypes from "prop-types";

import styles from "./SelectField.module.css";

class SelectField extends React.Component {
  shouldComponentUpdate(nextProps) {
    const compare = i => this.props[i] !== nextProps[i];

    const nextKeys = Object.keys(nextProps);
    const prevKeys = Object.keys(this.props);
    return nextKeys.some(compare) && prevKeys.some(compare);
  }

  render() {
    const {
      className,
      label,
      name,
      type,
      defaultValue,
      onChange,
      options,
      value,
      ...props
    } = this.props;
    const inputArgs = {
      ...props,
      id: `select-field-${name}`,
      name,
      type
    };

    if (value !== undefined) {
      inputArgs.value = value;
    } else {
      inputArgs.defaultValue = defaultValue;
    }

    inputArgs.onChange = e => onChange(e.target.value);
    return (
      <div className={`${styles.root} ${className}`}>
        <label htmlFor={`select-field-${name}`}>
          {label}
          <select {...inputArgs}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

SelectField.defaultProps = {
  defaultValue: "",
  type: "text",
  className: "",
  value: undefined
};

SelectField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])
};

export default SelectField;
