import { Col, Row } from 'quinn-ui';

export function Flex() {
  return (
    <>
      <Row style={{ marginBottom: '10px' }} type={'flex'}>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
      </Row>
      <Row style={{ marginBottom: '10px' }} type={'flex'} justify={'center'}>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
      </Row>
      <Row style={{ marginBottom: '10px' }} type={'flex'} justify={'end'}>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: '10px' }}
        type={'flex'}
        justify={'space-between'}
      >
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: '10px' }}
        type={'flex'}
        justify={'space-around'}
      >
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#e5e9f2', padding: '20px 0' }}></div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: '#99a9bf', padding: '20px 0' }}></div>
        </Col>
      </Row>
    </>
  );
}

export default Flex;
