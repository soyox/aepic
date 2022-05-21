import { themeState } from '@/store';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { THEMES } from '@/constants';

const isSystemDark = () => {
  return window.matchMedia('(prefers-color-scheme: dark)');
};

const useChangeTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  useEffect(() => {
    const matchMedia = isSystemDark();
    let themeWatcher: (() => void) | null = null;

    localStorage.setItem('aepic-theme', String(theme.id));
    let htmlClass = '';
    switch (theme.id) {
      case 0:
        htmlClass = 'light';
        break;
      case 1:
        htmlClass = 'dark';
        break;
      case 2: {
        themeWatcher = () => {
          console.log('System theme change');
        };
        matchMedia.addEventListener('change', themeWatcher);
        htmlClass = matchMedia.matches ? 'dark' : 'light';
        break;
      }
      default:
        htmlClass = 'light';
    }
    document.querySelector('html')!.className = htmlClass;
    return () => {
      if (themeWatcher) {
        matchMedia.removeEventListener('change', themeWatcher);
      }
    };
  }, [theme]);
};

export { useChangeTheme };
