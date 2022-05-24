import SVGIcon from '@/libs/svg-icon';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Category } from '../../types';
import { MouseEvent } from 'react';
import Popup from '@/libs/Popup';
import Menu from '@/layout/Main/Menu';
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

  useEffect(() => {
    if (categoriesRef.current.length !== 0) {
      setSliderStyle({
        transform: `translateX(${
          categoriesRef.current[currentSelectIdx].offsetLeft - 10
        }px)`,
        width: `${categoriesRef.current[currentSelectIdx].offsetWidth}px`,
      });
    }
  }, [currentSelectIdx]);

  /**
   * 获取被点击的元素并设置当前选中索引
   * @param event 鼠标点击事件
   */
  const handleSelect = (event: MouseEvent<HTMLLIElement>) => {
    const index = categoriesRef.current.findIndex((liEl) => {
      return liEl.contains(event.target as HTMLElement);
    });
    setCurrentSelectIdx(index);
  };

  /**
   * 将所有菜单对应的dom保存起来
   */
  const setItemRef = useCallback((li: HTMLLIElement) => {
    if (categoriesRef.current.length === 0) {
      // setCurrentSelectIdx(0);
      setSliderStyle({
        transform: `translateX(${li.offsetLeft - 10}px)`,
        width: `${li.offsetWidth}px`,
      });
    }
    categoriesRef.current = [...categoriesRef.current, li];
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * 弹出层菜单是否显示
   */
  const handleMenuChange = () => {
    setIsMenuOpen(isMenuOpen ? false : true);
  };
  /**
   * 弹出层菜单选中事件
   * @param _item 菜单项
   * @param index 索引值
   */
  const handleMenuSelect = (_item: Category, index: number) => {
    setCurrentSelectIdx(index);
    // 关闭菜单弹出层
    setIsMenuOpen(false);
  };
  return (
    <div className="bg-white sticky h-4 w-full top-0 left-0 z-10 select-none">
      <Popup open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <Menu categories={categories} onSelect={handleMenuSelect}></Menu>
      </Popup>
      {/* 滑块 */}
      {/* style={{ backdropFilter: 'blur(20px)' }} */}
      <ul className="bg-white relative flex h-4 overflow-x-auto  p-1 text-xs text-zinc-600 overflow-hidden">
        <li
          // ref={sliderRef}
          style={sliderStyle}
          className="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
        ></li>
        {/* 汉堡按钮 */}
        <li
          onClick={handleMenuChange}
          className="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
        >
          <SVGIcon name={'menu'} className="w-2 h-2"></SVGIcon>
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
