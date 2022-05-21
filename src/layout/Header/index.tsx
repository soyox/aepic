import { HTMLAttributes, useState } from 'react';
import My from './components/My';
import Search from './components/Search';
import Theme from './components/Theme';
import Icon from '@/assets/aepic.png';
import { useNavigate } from 'react-router-dom';

export type Header = HTMLAttributes<HTMLElement>;
const Header = ({ className, ...restProps }: Header) => {
  const navigater = useNavigate();
  const goHome = () => {
    navigater('/');
  };
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  return (
    <header
      {...restProps}
      className={
        'bg-white dark:bg-zinc-800 border-b border-b-zinc-200 dark:border-b-zinc-700 w-full px-2 py-1 duration-300' +
        ' ' +
        className
      }
    >
      <div className="flex h-full items-center">
        <img
          className="h-4 cursor-pointer mr-2"
          onClick={goHome}
          src={Icon}
          alt=""
        />
        <Search onSearch={handleSearch}>
          {searchValue ? <h1>searchValue</h1> : null}
        </Search>
        <Theme className="mx-1"></Theme>
        <My></My>
      </div>
    </header>
  );
};

export default Header;
