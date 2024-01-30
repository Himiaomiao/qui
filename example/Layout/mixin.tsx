import { Col, Row } from 'qui';
import React from 'react';

export function Layout() {
  return (
    <>
      <Row style={{ marginBottom: '10px' }} gutter={20}>
        <Col span={20}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={4}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
      </Row>

      <Row style={{ marginBottom: '10px' }} gutter={20}>
        <Col span={8}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={8}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
        <Col span={4}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={4}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
      </Row>

      <Row style={{ marginBottom: '10px' }} gutter={20}>
        <Col span={4}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={16}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
        <Col span={4}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
      </Row>
    </>
  );
}

export default Layout;
