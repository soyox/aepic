import { HTMLAttributes, useEffect, useState } from 'react';

interface SVGIconProps {
  //显示的svg
  name: string;
  //颜色
  color?: string;
  // tailwind类名
  fillClass?: string;
}
export type SVGIcon = SVGIconProps & HTMLAttributes<HTMLOrSVGElement>;
const SVGIcon = ({
  name,
  fillClass,
  color,
  className,
  ...restProps
}: SVGIcon) => {
  const [symbolId, setSymbolId] = useState(name);
  useEffect(() => {
    setSymbolId(`#icon-${name}`);
  }, [name]);
  return (
    <svg {...restProps} className={className} fill={color} aria-hidden={true}>
      <use xlinkHref={symbolId} />
    </svg>
  );
};

export default SVGIcon;
