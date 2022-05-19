import { useEffect, useState } from 'react';

interface SVGIconProps {
  //显示的svg
  name: string;
  //颜色
  color?: string;
  // tailwind类名
  fillClass?: string;
}
const SVGIcon = (props: SVGIconProps) => {
  const { name, fillClass } = props;

  const [symbolId, setSymbolId] = useState(name);
  useEffect(() => {
    setSymbolId(`#icon-${name}`);
  }, [name]);
  return (
    <svg className={fillClass} aria-hidden={true}>
      <use xlinkHref={symbolId} />
    </svg>
  );
};

export default SVGIcon;
