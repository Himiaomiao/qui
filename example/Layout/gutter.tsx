import { Col, Row } from 'qui';
import React from 'react';

export function Gutter() {
  return (
    <>
      <Row style={{ marginBottom: '10px' }} gutter={20}>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
      </Row>
    </>
  );
}

export default Gutter;
