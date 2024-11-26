import { Radio } from 'quinn-ui';
import { useState } from 'react';
export function Basic() {
  const [value, setValue] = useState('选中且禁用');
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div>
      <Radio
        value={value}
        label={'禁用'}
        onChange={handleChange}
        disabled={true}
      >
        单选框1
      </Radio>
      <Radio
        value={value}
        label={'选中且禁用'}
        onChange={handleChange}
        disabled={true}
      >
        单选框2
      </Radio>
    </div>
  );
}

export default Basic;
