import { ReactElement, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

export interface PopupProps {
  children?: ReactElement;
  open: boolean;
  onClose?: () => void;
}
const Popup = (props: PopupProps) => {
  const { children, open, onClose, ...restProps } = props;
  const bodyEl = useRef(document.querySelector('body'));

  const [inProp, setInprop] = useState(false);

  useEffect(() => {
    let overFlow = open ? 'hidden' : 'auto';
    document.documentElement.style.overflowY = overFlow;
  }, [open]);
  //点击蒙版触发关闭
  const handleClose = () => {
    onClose && onClose();
  };
  return bodyEl.current
    ? ReactDOM.createPortal(
        <div>
          <CSSTransition
            unmountOnExit
            classNames={'fade'}
            in={open}
            timeout={300}
          >
            <div
              onClick={handleClose}
              className="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
            ></div>
          </CSSTransition>
          <CSSTransition
            unmountOnExit
            classNames={'popup-down-up'}
            in={open}
            timeout={300}
          >
            <div
              className="w-screen bg-white z-50 fixed bottom-0"
              {...restProps}
            >
              {children}
            </div>
          </CSSTransition>
          <button onClick={() => setInprop(true)}>Click to enter</button>
        </div>,
        document.querySelector('body') as HTMLBodyElement,
      )
    : null;
};

Popup.defaultProps = {
  open: false,
};

export default Popup;
