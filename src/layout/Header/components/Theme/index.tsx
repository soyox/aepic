import { THEMES } from '@/constants';
import Button from '@/libs/Button';
import Popover from '@/libs/Popover';
import SVGIcon from '@/libs/svg-icon';
import { HTMLAttributes, useState } from 'react';

type Props = {} & HTMLAttributes<HTMLElement>;
export default function Theme({ ...resProps }: Props) {
  const [currentTheme, setCurrentTheme] = useState('theme');
  const handleThemeChange = (theme: typeof THEMES[0]) => {
    setCurrentTheme(theme?.icon || 'theme');
  };
  return (
    <div {...resProps}>
      <Popover
        location="bottom-left"
        layer={
          <div className="w-[180px] overflow-hidden border p-1 bg-white rounded-md">
            {THEMES.map((theme) => (
              <div
                key={theme?.id}
                className="flex items-center cursor-pointer text-sm p-1 hover:bg-zinc-100 duration-300 rounded-xl"
                onClick={() => handleThemeChange(theme)}
              >
                <SVGIcon
                  name={theme?.icon || ''}
                  className="h-2 w-2 mr-1 fill-zinc-900"
                ></SVGIcon>
                <span className="text-zinc-900 text-sm">{theme?.name}</span>
              </div>
            ))}
          </div>
        }
      >
        <Button
          icon={currentTheme}
          type="info"
          size="icon-default"
          iconClass="h-2 w-2"
        ></Button>
      </Popover>
    </div>
  );
}
