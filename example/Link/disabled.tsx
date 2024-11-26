import { Link } from 'quinn-ui';
export function Disabled() {
  return (
    <>
      <Link disabled={true}>默认链接</Link>
      <Link type="primary" disabled={true}>
        主要链接
      </Link>
      <Link type="success" disabled={true}>
        成功链接
      </Link>
      <Link type="warning" disabled={true}>
        警告链接
      </Link>
      <Link type="danger" disabled={true}>
        危险链接
      </Link>
      <Link type="info" disabled={true}>
        信息链接
      </Link>
    </>
  );
}

export default Disabled;
