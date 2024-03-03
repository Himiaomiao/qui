import { Button } from 'quinn-ui';
import React from 'react';

export function Text() {
  return (
    <div>
      <Button type={'text'}>文字按钮</Button>
      <Button type={'text'} disabled={true}>
        文字按钮
      </Button>
    </div>
  );
}

export default Text;
