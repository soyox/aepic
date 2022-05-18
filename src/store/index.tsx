import React from 'react';
import { atom, RecoilRoot } from 'recoil';

export const configState = atom({
  key: 'configState', // unique ID (with respect to other atoms/selectors)
  default: {
    isMT: false,
  }, // default value (aka initial value)
});

const Store = ({ children }: { children?: React.ReactElement }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Store;
