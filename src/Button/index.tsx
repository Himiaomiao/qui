import classNames from 'classnames';
import React, { useState } from 'react';
import '../Theme/button.scss';
//属性
interface ButtonProp {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  icon?: string;
  size?: string;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  loading?: boolean;
  disabled?: boolean;
  autofocus?: boolean;
  nativeType?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProp) {
  // const [nativeType] = useState(
  //   typeof props.nativeType === 'string' ? props.nativeType : 'button',
  // );
  //const type = nativeType;
  const [children] = useState(React.Children.toArray(props?.children));
  const [classes] = useState(
    classNames(
      'qui-button',
      props.type ? `qui-button--${props.type}` : `qui-button--default`,
      props.plain ? `is-plain` : ``,
      props.round ? `is-round` : ``,
      props.circle ? 'is-circle' : '',
      props.icon && children.length > 0 ? 'is-icon' : '',
      props.disabled ? 'is-disabled' : '',
    ),
  );
  return (
    <button
      className={classes}
      type={'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <>
        {children.map((item) => {
          return item;
        })}
        {props.circle ? <i className={props.icon}></i> : null}
      </>
    </button>
  );
}
export default Button;
