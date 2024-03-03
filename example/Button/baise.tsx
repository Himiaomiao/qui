import { Button } from 'quinn-ui';
import React from 'react';

export function Basic() {
  return (
    <>
      <div>
        <Button>默认按钮</Button>
        <Button type={'primary'}>主要按钮</Button>
        <Button type={'success'}>成功按钮</Button>
        <Button type={'info'}>信息按钮</Button>
        <Button type={'warning'}>警告按钮</Button>
        <Button type={'danger'}>危险按钮</Button>
      </div>

      <div style={{ paddingTop: '10px' }}>
        <Button plain={true}>朴素按钮</Button>
        <Button type={'primary'} plain={true}>
          主要按钮
        </Button>
        <Button type={'success'} plain={true}>
          成功按钮
        </Button>
        <Button type={'info'} plain={true}>
          信息按钮
        </Button>
        <Button type={'warning'} plain={true}>
          警告按钮
        </Button>
        <Button type={'danger'} plain={true}>
          危险按钮
        </Button>
      </div>

      <div style={{ paddingTop: '10px' }}>
        <Button round={true}>圆角按钮</Button>
        <Button type={'primary'} round={true}>
          主要按钮
        </Button>
        <Button type={'success'} round={true}>
          成功按钮
        </Button>
        <Button type={'info'} round={true}>
          信息按钮
        </Button>
        <Button type={'warning'} round={true}>
          警告按钮
        </Button>
        <Button type={'danger'} round={true}>
          危险按钮
        </Button>
      </div>

      <div style={{ paddingTop: '10px' }}>
        <Button icon={'el-icon-search'} circle={true}></Button>
        <Button type={'primary'} icon={'el-icon-edit'} circle={true}></Button>
        <Button type={'success'} icon={'el-icon-check'} circle={true}></Button>
        <Button type={'info'} icon={'el-icon-star-off'} circle={true}></Button>
        <Button
          type={'warning'}
          icon={'el-icon-message'}
          circle={true}
        ></Button>
        <Button type={'danger'} icon={'el-icon-delete'} circle={true}></Button>
      </div>
    </>
  );
}

export default Basic;
