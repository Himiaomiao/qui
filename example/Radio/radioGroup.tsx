import { Radio, RadioGroup } from 'quinn-ui';
import React, { useState } from 'react';

export function Group() {
  const [value, setValue] = useState(1);
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <RadioGroup value={value} onChange={handleChange}>
      <Radio label={1}>选项1</Radio>
      <Radio label={2}>选项2</Radio>
      <Radio label={3}>选项3</Radio>
      <Radio label={4}>选项4</Radio>
    </RadioGroup>
  );
}

export default Group;
