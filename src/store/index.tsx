import { Category } from '@/layout/Main/Navigation/types';
import React from 'react';
import { atom, RecoilRoot } from 'recoil';

export const categoriesState = atom<Category[]>({
  key: 'categoriesState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

const Store = ({ children }: { children?: React.ReactElement }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Store;
