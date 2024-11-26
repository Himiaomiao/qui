import React from 'react';

interface RadioGroupProp {
  value: string | number;
  disabled?: boolean;
  border?: string;
  size?: 'medium' | 'small' | 'mini';
  children?: React.ReactNode;
  onChange: (value: string | number | boolean) => void;
}

export function RadioGroup(props: RadioGroupProp) {
  const children = React.Children.toArray(props?.children);
  const handleChange = (value) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <div>
      {children.map((element, index) => {
        return React.cloneElement(
          element,
          Object.assign({}, element.props, {
            onChange: handleChange,
            value: props.value,
            key: index,
          }),
        );
      })}
    </div>
  );
}

export default RadioGroup;
