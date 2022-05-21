import { THEMES, ThemeTypes } from '@/constants';
import Button from '@/libs/Button';
import Popover from '@/libs/Popover';
import SVGIcon from '@/libs/svg-icon';
import { themeState } from '@/store';
import { HTMLAttributes, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

type Props = {} & HTMLAttributes<HTMLElement>;
export default function Theme({ ...resProps }: Props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  const handleThemeChange = (theme: ThemeTypes) => {
    setCurrentTheme(theme);
  };
  return (
    <div {...resProps}>
      <Popover
        location="bottom-left"
        layer={
          <div className="w-[180px] overflow-hidden border p-1 bg-white dark:bg-zinc-800 rounded-md dark:border-zinc-600">
            {THEMES.map((theme) => (
              <div
                key={theme?.id}
                className="flex items-center cursor-pointer text-sm p-1 hover:bg-zinc-100 dark:hover:bg-zinc-600 duration-300 rounded-xl"
                onClick={() => handleThemeChange(theme)}
              >
                <SVGIcon
                  name={theme?.icon || 'theme'}
                  className="h-2 w-2 mr-1 fill-zinc-900 dark:fill-zinc-300"
                ></SVGIcon>
                <span className="text-zinc-900 dark:text-zinc-300 text-sm">
                  {theme?.name}
                </span>
              </div>
            ))}
          </div>
        }
      >
        <Button
          icon={currentTheme?.icon}
          type="info"
          size="icon-default"
          className="dark:bg-zinc-800 dark:hover:bg-zinc-900"
          iconClass="h-2 w-2 dark:fill-zinc-300"
        ></Button>
      </Popover>
    </div>
  );
}
