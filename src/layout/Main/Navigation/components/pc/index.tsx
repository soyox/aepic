import SVGIcon from '@/libs/svg-icon';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { Category } from '../../types';

type PCNavProps = {
  categories: Category[];
};
const pcNav = ({ categories }: PCNavProps) => {
  const [isExtends, setIsExtends] = useState(false);

  const triggleExtends = () => {
    setIsExtends(isExtends ? false : true);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index: number) => {
    console.log(index);
    setSelectedIndex(index);
  };
  return (
    <div className="bg-white-600 dark:bg-zinc-800 sticky top-0 left-0 w-full z-10 duration-300">
      <ul
        className={classnames(
          'w-[800px] relative flex flex-wrap justify-center overflow-x-auto px-[10px] py-1 text-xs text-zinc-600 dark:text-zinc-300 duration-300 overflow-hidden mx-auto select-none',
          //展开高度控制
          isExtends ? 'h-[206px]' : 'h-[56px]',
        )}
      >
        {categories.map((category, i) => (
          <li
            onClick={() => handleSelect(i)}
            key={category.id}
            className={classnames(
              'shrink-0 px-1.5 py-0 z-10 duration-200 font-bold text-zinc-900 dark:text-zinc-300 text-base h-4 leading-4 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded mb-1 ml-1 ',
              {
                'text-zinc-900 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-600':
                  i === selectedIndex,
              },
            )}
          >
            {category.name}
          </li>
        ))}
        {/* 箭头 */}
        <div
          onClick={triggleExtends}
          className="absolute right-1 bottom-1 z-20 rounded cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 duration-200"
        >
          <SVGIcon
            name="down"
            className={`h-3 w-3 duration-500 dark:fill-zinc-300 ${
              isExtends ? 'rotate-180' : ''
            }`}
          ></SVGIcon>
        </div>
      </ul>
    </div>
  );
};
export default pcNav;
