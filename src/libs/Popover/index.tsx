import { HTMLAttributes, ReactNode, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import './index.scss';

enum LocationEnum {
  'bottom-left' = 'top-[100%] left-0 translate-x-[-100%]',
  'bottom-right' = 'top-[100%] left-[100%]',
  'top-left' = 'top-[-100%] left-[-100%]',
  'top-right' = 'top-[-100%] left-[100%]',
  'top' = 'top-[-100%] left-0 translate-x-[-25%]',
  'left' = 'top-[50%] left-0 translate-x-[-100%] translate-y-[-50%]',
  'right' = 'top-[50%] left-[100%] translate-y-[-50%]',
  'bottom' = 'top-[100%] left-0 translate-x-[-25%]',
}
type Props = {
  layer?: ReactNode;
  children: ReactNode;
  location: keyof typeof LocationEnum;
} & HTMLAttributes<HTMLElement>;

export default function Popover({ children, layer, location }: Props) {
  const [isLayerShow, setIsLayerShow] = useState(false);
  return (
    <div>
      {/* 触发弹层 */}
      <div
        onMouseEnter={() => setIsLayerShow(true)}
        onMouseLeave={() => setIsLayerShow(false)}
        className="relative"
      >
        {children}
        {layer && (
          // 弹层
          <CSSTransition
            unmountOnExit
            classNames={'layer'}
            in={isLayerShow}
            timeout={500}
          >
            <div
              className={classnames(
                'absolute z-50',
                LocationEnum[location],
                // className,
              )}
            >
              {layer}
            </div>
          </CSSTransition>
        )}
      </div>
    </div>
  );
}

Popover.defaultProps = {
  location: 'top-left',
};
