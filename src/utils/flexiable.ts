// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { PC_DEVICE_WIDTH } from '../constants/index';
/**
 * 判断当前是否为移动设备，判断依据是屏幕宽度是否小于指定宽度
 */
export const isMobileTerminal = () => {
  const [state, setState] = useState(
    document.documentElement.clientWidth < PC_DEVICE_WIDTH,
  );
  const resizeListener = () => {
    setState(document.documentElement.clientWidth < PC_DEVICE_WIDTH);
  };
  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  return state;
  // return document.documentElement.clientWidth < PC_DEVICE_WIDTH;
};
