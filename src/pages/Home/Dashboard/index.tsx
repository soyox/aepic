import { useEffect } from 'react';

export default function DashBoard() {
  useEffect(() => {
    console.log('Dashboard(mounted)');

    return () => {
      console.log('Dashboard(unmounted)');
    };
  }, []);

  return <h1>DashBoard</h1>;
}
