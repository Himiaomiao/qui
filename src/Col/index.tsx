import classNames from 'classnames';
import React, { useContext } from 'react';
import { Context } from '../Row/index';
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
  const context = useContext(Context);
  let padding = context.gutter ? context.gutter / 2 : 0;
  return (
    <div
      className={classes}
      style={{ width: `${spanWidth}%`, padding: `0px ${padding}px` }}
    >
      {children.map((item) => {
        return item;
      })}
    </div>
  );
}
export default Col;
