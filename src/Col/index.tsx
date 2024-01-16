import classNames from 'classnames';
import React from 'react';
import './index.less';

interface ColProp {
  children?: React.ReactNode;
  span?: number;
  offset?: number;
  push?: number;
}

export function Col(props: ColProp) {
  let children = React.Children.toArray(props?.children);
  let classes = classNames('q-col');
  let spanWidth = props.span ? 100 / (24 / props.span) : 100;
  return (
    <div className={classes} style={{ width: `${spanWidth}%` }}>
      {children.map((item) => {
        return item;
      })}
    </div>
  );
}
export default Col;
