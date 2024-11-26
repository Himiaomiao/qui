import { Link } from 'quinn-ui';
export function Basic() {
  return (
    <>
      <Link>默认链接</Link>
      <Link type="primary">主要链接</Link>
      <Link type="success">成功链接</Link>
      <Link type="warning">警告链接</Link>
      <Link type="danger">危险链接</Link>
      <Link type="info">信息链接</Link>
    </>
  );
}

export default Basic;
