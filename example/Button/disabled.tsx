import { Button } from 'quinn-ui';
import React from 'react';

export function Disabled() {
  return (
    <>
      <div>
        <Button disabled={true}>默认按钮</Button>
        <Button type={'primary'} disabled={true}>
          主要按钮
        </Button>
        <Button type={'success'} disabled={true}>
          成功按钮
        </Button>
        <Button type={'info'} disabled={true}>
          信息按钮
        </Button>
        <Button type={'warning'} disabled={true}>
          警告按钮
        </Button>
        <Button type={'danger'} disabled={true}>
          危险按钮
        </Button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <Button disabled={true} plain={true}>
          朴素按钮
        </Button>
        <Button type={'primary'} disabled={true} plain={true}>
          主要按钮
        </Button>
        <Button type={'success'} disabled={true} plain={true}>
          成功按钮
        </Button>
        <Button type={'info'} disabled={true} plain={true}>
          信息按钮
        </Button>
        <Button type={'warning'} disabled={true} plain={true}>
          警告按钮
        </Button>
        <Button type={'danger'} disabled={true} plain={true}>
          危险按钮
        </Button>
      </div>
    </>
  );
}

export default Disabled;
