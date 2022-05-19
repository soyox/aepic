import MobileNav from './components/mobile';
import PcNav from './components/pc';
import { isMobileTerminal } from '@/utils/flexiable';
import { useEffect, useState } from 'react';
import { getGategories } from '@/api';
import { Category } from './types';

const Navigation = () => {
  const isMT = isMobileTerminal();
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getGategories().then((res) => {
      setCategories([
        {
          id: 'all',
          name: '全部',
          urlname: 'all',
        },
        ...res.categorys,
      ]);
    });
  }, []);
  return isMT ? (
    <MobileNav categories={categories}></MobileNav>
  ) : (
    <PcNav></PcNav>
  );
};

export default Navigation;
