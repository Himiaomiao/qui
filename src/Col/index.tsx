import classNames from 'classnames';
import React, { useContext,useState } from 'react';
import { Context } from '../Row/index';
import '../Theme/col.scss'

interface ColProp {
  children?: React.ReactNode;
  span?: number;
  offset?: number;
  push?: number;
  pull?:number
}

export function Col(props: ColProp) {
  let children = React.Children.toArray(props?.children);
  const [classes] = useState( classNames({
    'qui-col':true,
    [`qui-col-${props.span}`]:true,
    [`qui-col-offset-${props.offset}`]:true,
    [`qui-col-push-${props.push}`]:true,
    [`qui-col-pull-${props.pull}`]:true,
  }))
  const context = useContext(Context);
  let padding = context.gutter ? context.gutter / 2 : 0;
  return (
    <div
      className={classes}
      style={{padding: `0px ${padding}px` }}
    >
      {children.map((item) => {
        return item;
      })}
    </div>
  );
}
export default Col;
