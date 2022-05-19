import SVGIcon from '@/libs/svg-icon';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Category } from '../../types';
import { MouseEvent } from 'react';
interface MobileNavpProps {
  categories: Category[];
}
const MobileNav = (props: MobileNavpProps) => {
  const { categories } = props;
  const sliderRef = useRef<null | HTMLLIElement>(null);

  //滑块样式
  const [sliderStyle, setSliderStyle] = useState({
    transform: 'translateX(0px)',
    width: '54px',
  });

  //category数组
  const categoriesRef = useRef<HTMLLIElement[]>([]);

  //当前选中的菜单索引
  const [currentSelectIdx, setCurrentSelectIdx] = useState(0);

  const handleSelect = (event: MouseEvent<HTMLLIElement>) => {
    const index = categoriesRef.current.findIndex((liEl) => {
      return liEl.contains(event.target as HTMLElement);
    });
    setCurrentSelectIdx(index);
    const selectedCategoryEl = categoriesRef.current[index];

    //

    // 减去padding
    const left = selectedCategoryEl.offsetLeft - 10;
    const width = selectedCategoryEl.offsetWidth;

    setSliderStyle({
      transform: `translateX(${left}px)`,
      width: width + 'px',
    });
  };

  // 将所有菜单对应的dom保存起来
  const setItemRef = useCallback((li: HTMLLIElement) => {
    if (categoriesRef.current.length === 0) {
      setSliderStyle({
        transform: `translateX(${li.offsetLeft - 10}px)`,
        width: `${li.offsetWidth}px`,
      });
    }
    categoriesRef.current = [...categoriesRef.current, li];
  }, []);

  return (
    <div className="bg-white sticky h-4 top-0 left-0 z-10 select-none">
      {/* 滑块 */}
      {/* style={{ backdropFilter: 'blur(20px)' }} */}
      <ul className="bg-white fixed flex h-4 overflow-x-auto  p-1 text-xs text-zinc-600 overflow-hidden">
        <li
          // ref={sliderRef}
          style={sliderStyle}
          className="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
        ></li>
        {/* 汉堡按钮 */}
        <li className="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white">
          <SVGIcon name={'menu'} fillClass="w-2 h-2"></SVGIcon>
        </li>
        {categories.map((category, index) => (
          <li
            ref={setItemRef}
            onClick={handleSelect}
            className={`shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4 cursor-pointer ${
              currentSelectIdx === index ? 'text-zinc-100' : ''
            }`}
            key={category.id}
          >
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MobileNav;
