import { DEFAULT_CATEGORIES, THEMES, ThemeTypes } from '@/constants';
import { Category } from '@/layout/Main/Navigation/types';
import React from 'react';
import { atom, RecoilRoot } from 'recoil';

export const categoriesState = atom<Category[]>({
  key: 'categoriesState', // unique ID (with respect to other atoms/selectors)
  default: DEFAULT_CATEGORIES, // default value (aka initial value)
});

const lsTheme = localStorage.getItem('aepic-theme');
const defaultThemeIdx = lsTheme ? Number(lsTheme) : 2;
export const themeState = atom<ThemeTypes>({
  key: 'themeState',
  default: THEMES[defaultThemeIdx],
});

const Store = ({ children }: { children?: React.ReactElement }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Store;
