import React, { HTMLAttributes, useEffect, useRef } from 'react';
import SVGIcon from '../svg-icon';

type Props = {
  onFinish?: () => void;
  finished?: boolean;
} & HTMLAttributes<HTMLElement>;

export default function Infinite({ children, onFinish, finished }: Props) {
  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      onFinish && onFinish();
    });
    observerRef.current && intersectionObserver.observe(observerRef.current);
    return () => {
      observerRef.current &&
        intersectionObserver.unobserve(observerRef.current);
    };
  }, [onFinish]);

  return (
    <div>
      {children}
      <div
        ref={observerRef}
        className="flex items-center justify-center text-base text-zinc-500 dark:text-zinc-300"
      >
        {finished ? (
          '没有更多数据'
        ) : (
          <div ref={observerRef}>
            <SVGIcon
              name="loading"
              className="h-2 w-2 fill-zinc-600 dark:fill-zinc-300 animate-spin"
            ></SVGIcon>
          </div>
        )}
      </div>
    </div>
  );
}
