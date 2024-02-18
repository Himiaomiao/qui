import React,{useState} from 'react';
import classNames from 'classnames';
import '../Theme/button.scss'
//属性
interface ButtonProp{
type?:string,
size?:string,
plain?:boolean,
round?:boolean,
circle?:boolean,
loading?:boolean,
disabled?:boolean,
autofocus?:boolean,
nativeType?:"button" | "submit" | "reset" ,
children?: React.ReactNode;
}

export function Button(props:ButtonProp) {

const nativeType = typeof props.nativeType === 'string' ? props.nativeType :'button'
 const children = React.Children.toArray(props?.children);
 const classes = classNames({
  'qui-button':true,
  [`qui-button--${props.type}`]:true
 })
  return <button className={classes} type={nativeType || 'button'}>
      {children.map((item) => {
          return item;
        })}
  </button>
}
export default Button;
