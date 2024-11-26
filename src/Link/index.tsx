import classNames from 'classnames';
import React, { useState } from 'react';
import '../Theme/link.scss';
interface LinkProp {
  type?: string;
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: string;
  children?: React.ReactNode;
}

export function Link(props: LinkProp) {
  const children = React.Children.toArray(props?.children);
  const { underline = true } = props;
  const [classes] = useState(
    classNames(
      'qui-link',
      props.type ? `qui-link--${props.type}` : `qui-link--default`,
      props.disabled ? `is-disabled` : ``,
      underline ? `` : `is-underline`,
    ),
  );
  return (
    <a className={classes} href={props.href || ''}>
      <span>
        {children.map((item) => {
          return item;
        })}
      </span>
    </a>
  );
}

export default Link;
