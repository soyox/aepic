import Button from '@/libs/Button';
import Popover from '@/libs/Popover';
import SVGIcon from '@/libs/svg-icon';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const options = [
  {
    id: 1,
    icon: 'my',
    name: '个人资料',
    path: '/profile',
  },
  {
    id: 2,
    icon: 'vip',
    name: '升级账户',
    path: '/memeber',
  },
  {
    id: 3,
    icon: 'exit',
    name: '退出登录',
    path: '/logout',
  },
];

export default function My() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };
  return (
    <div>
      {isLogin ? (
        <Popover
          layer={
            <div className="w-[180px] overflow-hidden border p-1 bg-white rounded-md">
              {options.map((option) => (
                <Link
                  to={option.path}
                  key={option?.id}
                  className="flex items-center cursor-pointer text-sm p-1 hover:bg-zinc-100 duration-300 rounded-xl"
                  // onClick={() => handleThemeChange(theme)}
                >
                  <SVGIcon
                    name={option?.icon || ''}
                    className="h-2 w-2 mr-1 fill-zinc-900"
                  ></SVGIcon>
                  <span className="text-zinc-900 text-sm">{option?.name}</span>
                </Link>
              ))}
            </div>
          }
          location="bottom-left"
        >
          <div className="flex items-center pr-0.5 cursor-pointer rounded outline-none hover:bg-zinc-100 duration-200">
            <div className="bg-zinc-50 h-4 w-4 rounded overflow-hidden">
              <img
                src="src\assets\avatar-test.jpg"
                width={'100%'}
                height={'100%'}
                alt="头像"
              />
              <SVGIcon
                name="vip-float"
                className="absolute w-2 h-2 bottom-0 translate-y-[25%] right-[18px] "
              ></SVGIcon>
            </div>
            <div className="">
              <SVGIcon name="down" className="h-2 w-2"></SVGIcon>
            </div>
          </div>
        </Popover>
      ) : (
        <Button
          onClick={handleLogin}
          icon="my"
          iconColor="#fff"
          iconClass="h-2 w-2"
        ></Button>
      )}
    </div>
  );
}
