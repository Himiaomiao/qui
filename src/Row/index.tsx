import classNames from 'classnames';
import React, { createContext } from 'react';
import './index.less';

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
  let classes = classNames(`q-row ${props.className}`);
  return (
    <Context.Provider value={props}>
      <div className={'q-row'} style={props.style}>
        {children.map((item) => {
          return item;
        })}
      </div>
    </Context.Provider>
  );
}

export default Row;
