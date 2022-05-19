// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { MAX_FONT_SIZE, PC_DEVICE_WIDTH } from '../constants/index';
/**
 * 判断当前是否为移动设备，判断依据是屏幕宽度是否小于指定宽度
 * @returns state: true | false
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

let useRemListener: EventListener = () => {
  // 拿到html标签
  const html = document.querySelector('html');

  // 计算fontSize => 屏幕宽度 / 10
  let fontSize = window.innerWidth / 10;
  fontSize = Math.min(fontSize, MAX_FONT_SIZE);

  // 赋值
  html && (html.style.fontSize = fontSize + 'px');
};
//动态指定rem基准值，最大为40px
export const useRem = () => {
  // 定义最大的fontSize
  // 监听html文档被解析完成的事件

  document.addEventListener('DOMContentLoaded', useRemListener);
  window.addEventListener('resize', useRemListener);
};
