import classNames from 'classnames';
import React from 'react';
import './index.less';

interface RowProp {
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom';
  gutter?: number;
  children?: React.ReactNode;
  style?: object;
}

export function Row(props: RowProp) {
  let children = React.Children.toArray(props?.children);
  let classes = classNames('q-row');
  return (
    <div className={'q-row'} style={props.style}>
      {children.map((item) => {
        return item;
      })}
    </div>
  );
}

export default Row;
