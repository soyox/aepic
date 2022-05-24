import { HTMLAttributes, MutableRefObject } from 'react';
import classnames from 'classnames';
import SVGIcon from '../svg-icon';

enum TypeEmun {
  primary = 'text-white bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-900 dark:text-zinc-300 active:bg-zinc-800',
  main = 'text-white bg-main dark:bg-zinc-900 hover:bg-hover-main active:bg-main dark:hover:bg-zinc-700 dark:active:bg-zinc-700',
  info = 'text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200',
}

const SizeEnum = {
  // 文字按钮
  default: {
    button: 'w-8 h-4 text-base',
    icon: '',
  },
  /** icon按钮 */
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5',
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: '',
  },
  'icon-small': {
    button: 'w-3 h-3 text-base',
    icon: 'w-1.5 h-1.5',
  },
  lg: {
    button: 'w-9 h-5 text-base',
    icon: '',
  },
  'icon-lg': {
    button: 'w-5 h-5',
    icon: 'w-2 h-2',
  },
};

type Props = {
  /** 大小 */
  size: keyof typeof SizeEnum;
  /** 风格类型 */
  type: keyof typeof TypeEmun;
  /** icon名称 */
  icon?: string;
  /** icon颜色 */
  iconColor?: string;
  /** 图标类名 */
  iconClass?: string;
  /** 按钮点击是否需要动画 */
  animate: boolean;
  /** 加载状态 */
  loading: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({
  size,
  type,
  animate,
  children,
  className,
  loading,
  icon,
  iconClass,
  iconColor,
  ...rest
}: Props) {
  let realSize = size;
  // 处理传入icon但size属性为非icon按钮属性时加上icon前缀
  if (icon && !/^icon-/.test(size)) {
    realSize = ('icon-' + size) as typeof size;
  }

  const classNames = classnames(
    'text-sm text-center rounded duration-150 flex justify-center items-center',
    TypeEmun[type],
    SizeEnum[realSize].button,
    {
      'active:scale-105': animate,
    },
    className,
  );
  return (
    <button {...rest} className={classNames}>
      {loading ? (
        <SVGIcon name="loading" className="w-2 h-2 animate-spin"></SVGIcon>
      ) : null}
      {icon ? (
        <SVGIcon
          name={icon}
          className={classnames(SizeEnum[realSize].icon, iconClass)}
          color={iconColor}
        />
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
}

Button.defaultProps = {
  size: 'default',
  type: 'primary',
  animate: true,
  loading: false,
};
