import { Radio } from 'quinn-ui';
import { useState } from 'react';
export function Basic() {
  const [value, setValue] = useState(1);

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div>
      <Radio value={value} label={1} onChange={handleChange}>
        单选框1
      </Radio>
      <Radio value={value} label={2} onChange={handleChange}>
        单选框2
      </Radio>
    </div>
  );
}

export default Basic;
