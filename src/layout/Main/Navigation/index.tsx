import MobileNav from './components/mobile';
import PcNav from './components/pc';
import { isMobileStatic, isMobileTerminal } from '@/utils/flexiable';
import { useEffect, useState } from 'react';
import { getGategories, getPictures } from '@/api';
import { Category } from './types';
import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { categoriesState } from '@/store';

const Navigation = () => {
  const isMT = isMobileStatic();
  const [categories] = useRecoilState(categoriesState);

  return isMT ? (
    <MobileNav
      categories={[
        {
          id: 'all',
          name: '全部',
          urlname: 'all',
        },
        ...categories,
      ]}
    ></MobileNav>
  ) : (
    <PcNav
      categories={[
        {
          id: 'all',
          name: '全部',
          urlname: 'all',
        },
        ...categories,
      ]}
    ></PcNav>
  );
};

export default Navigation;
