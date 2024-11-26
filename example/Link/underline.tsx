import { Link } from 'quinn-ui';
export function Underline() {
  return (
    <>
      <Link underline={false}>无下划线</Link>
      <Link>有下划线</Link>
    </>
  );
}

export default Underline;
