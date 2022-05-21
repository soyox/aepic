import { useEffect } from 'react';
import { useQueryClient } from 'react-query';

function Me() {
  const queryClient = useQueryClient();

  useEffect(() => {
    console.log('Me(mounted)');
    return () => console.log('Me(unmounted)');
  });
  return <h1>Me</h1>;
}
export default Me;
