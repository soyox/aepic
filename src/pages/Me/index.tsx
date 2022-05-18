import { useEffect } from 'react';

function Me() {
  useEffect(() => {
    console.log('Me(mounted)');
    return () => console.log('Me(unmounted)');
  });
  return <h1>Me</h1>;
}
export default Me;
