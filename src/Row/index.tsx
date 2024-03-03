import classNames from 'classnames';
import React, { createContext, useState } from 'react';
import '../Theme/row.scss';

interface RowProp {
  type?: string;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom';
  gutter?: number;
  children?: React.ReactNode;
  style?: object;
  className?: string;
}
export const Context = createContext<RowProp>({});

export function Row(props: RowProp) {
  let children = React.Children.toArray(props?.children);
  const [classes] = useState(
    classNames({
      'qui-row': true,
      'qui-row--flex': props.type === 'flex',
      [`is-justify-${props.justify ? props.justify : 'start'}`]: true,
      [`is-align-${props.align}`]: props.align ? true : false,
    }),
  );

  return (
    <Context.Provider value={props}>
      <div className={classes} style={props.style}>
        {children.map((item) => {
          return item;
        })}
      </div>
    </Context.Provider>
  );
}

export default Row;
