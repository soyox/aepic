import Button from '@/libs/Button';
import SVGIcon from '@/libs/svg-icon';
import { ReactElement, useRef, useState, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

type SearchProps = {
  children?: ReactNode;
  onSearch?: (value: string) => void;
};
export type Search = SearchProps;
export default function Search({ children, onSearch }: SearchProps) {
  const [value, setValue] = useState('');
  const handleSearch = () => {
    if (value === '') return;
    onSearch && onSearch(value);
  };

  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="group border-white h-full w-full rounded-xl p-0.5 flex items-center relative duration-500 hover:bg-red-100/40">
      <SVGIcon
        className="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] left-2"
        name={'search'}
        color="#707070"
      ></SVGIcon>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.code === 'Enter' && handleSearch()}
        type="text"
        placeholder="搜索"
        className={`block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400
         text-zinc-900 rounded-xl tracking-wide text-sm font-semibold border border-zinc-100
          focus:border-red-300 duration-500 group-hover:bg-white group-hover:border-zinc-100
         `}
      />
      {/* 清空按钮 */}
      <SVGIcon
        onClick={() => setValue('')}
        name="delete"
        className={`opacity-0 group-hover:opacity-${
          value ? 100 : 0
        } h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500`}
      ></SVGIcon>
      {/* 分割线 */}
      <div className="opacity-0 group-hover:opacity-100 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] z-40 right-7 duration-500 bg-zinc-200"></div>
      <Button
        type="main"
        icon="search"
        iconColor="#fff"
        className="opacity-0 group-hover:opacity-100 absolute right-1 top-[50%] translate-y-[-50%] rounded-full"
        onClick={handleSearch}
      ></Button>
      {/* 下拉框 */}
      {children && (
        <CSSTransition unmountOnExit name="slide" in={!!children} timeout={300}>
          <div className="opacity-0 max-h-[368px] overflow-auto z-20 text-base w-full bg-white border rounded-sm absolute top-[100%] left-0 p-2 border-zinc-200 duration-500 hover:shadow-2xl group-hover:opacity-100">
            {children}
          </div>
        </CSSTransition>
      )}
    </div>
  );
}
