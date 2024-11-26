import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import '../Theme/radio.scss';
interface RadioProp {
  value: string | number | boolean;
  label: string | number | boolean;
  disabled?: boolean;
  border?: string;
  size?: 'medium' | 'small' | 'mini';
  name?: string;
  children?: React.ReactNode;
  onChange: (value: string | number | boolean) => void;
}
export function Radio(props: RadioProp) {
  const changeCheck = () => {
    return props.value === props.label;
  };

  const [checked, setChecked] = useState(changeCheck());

  useEffect(() => {
    setChecked(changeCheck());
  }, [props.value]);

  const handleChange = (event) => {
    if (props.disabled) return;
    if (props.onChange) {
      props.onChange(props.label);
    }
    setChecked(event.target.checked);
  };

  const classes = useMemo(() => {
    return classNames(
      'qui-redio',
      checked ? 'is-checked' : '',
      props.disabled ? 'is-disabled' : '',
    );
  }, [checked]);

  return (
    <label className={classes}>
      <span className={classes}>
        <span className="qui-radio__inner"></span>
        <input
          className="qui-radio__original"
          type="radio"
          label={props.label}
          checked={checked}
          onChange={handleChange}
        />
      </span>
      <span className="qui-radio__label">{props.children || props.label}</span>
    </label>
  );
}
export default Radio;
