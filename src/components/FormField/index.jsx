import React from "react";
import PropTypes from "prop-types";

import styles from "./FormField.module.css";

class FormField extends React.Component {
  shouldComponentUpdate(nextProps) {
    const compare = i => this.props[i] !== nextProps[i];

    const nextKeys = Object.keys(nextProps);
    const prevKeys = Object.keys(this.props);
    return nextKeys.some(compare) && prevKeys.some(compare);
  }

  render() {
    const { className, label, name, type, defaultValue, onChange, value, ...props } = this.props;
    const inputArgs = { id: `form-field-${name}`, name, type };

    if (value !== undefined) {
      inputArgs.value = value;
    } else {
      inputArgs.defaultValue = defaultValue;
    }

    if (type === "checkbox" || type === "radio") {
      inputArgs.checked = value !== undefined ? value : false;
      inputArgs.onChange = e => onChange(e.target.checked);
      return (
        <div className={`${styles.root} ${className}`}>
          <label htmlFor={`form-field-${name}`}>
            <input {...props} {...inputArgs} />
            {label}
          </label>
        </div>
      );
    }

    inputArgs.onChange = e => onChange(e.target.value);
    return (
      <div className={`${styles.root} ${className}`}>
        <label htmlFor={`form-field-${name}`}>
          {label}
          <input {...inputArgs} />
        </label>
      </div>
    );
  }
}

FormField.defaultProps = {
  defaultValue: "",
  type: "text",
  className: "",
  value: undefined
};

FormField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])
};

export default FormField;
