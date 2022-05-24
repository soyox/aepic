import {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';
import { getMinHeightColumn } from './utils';
import React from 'react';

type Props<T> = {
  /** 数据源 */
  data: T[];
  /** 标识 */
  nodeKey?: keyof T;
  /** 列数 */
  column: number;
  /** 列间距 */
  columnSpacing: number;
  /** 行间距 */
  rowSpacing: number;
  /** 是否预读取 */
  picturePreReading: boolean;
  /** 渲染函数 */
  rendeChild: (node: T, index?: number, columnWidth?: number) => ReactNode;
} & HTMLAttributes<HTMLElement>;
function Waterfall<T>({
  className,
  data,
  rendeChild,
  nodeKey,
  column,
  columnSpacing,
  picturePreReading,
}: Props<T>) {
  type StyleItem = T & { _style: { left: number; top: number } };
  const containerRef = useRef<HTMLUListElement | null>(null);

  /** 列间距合计 */
  const columnSpacingCount = (column - 1) * columnSpacing;

  /**
   * 获取每一个item元素真实的高度数组
   * @returns item元素真实的高度数组
   */

  const useItemHeight = () => {
    const itemHeights: number[] = [];
    const itemElements = Array.from(
      containerRef.current!.querySelectorAll<HTMLLIElement>(
        '.m-waterfall-item',
      ),
    );
    itemElements.forEach((el) => {
      itemHeights.push(el.offsetHeight);
    });

    return itemHeights;
  };

  /**
   * 获取插入位置的left坐标
   * @param column
   * @returns
   */
  const getItemLeft = (column: number) => {
    return (
      column * state.columnWidth + column * columnSpacing + state.containerLeft
    );
  };

  /**
   * 获取插入位置的top坐标
   * @param height : ;
   * @returns
   */
  const getItemTop = (height: number) => {
    return height;
  };

  const [state, setState] = useState({
    /** 容器的总宽度（不包含padding,margin,border） */
    containerWitdh: 0,
    /** 容器的左边距，计算item的left */
    containerLeft: 0,
    /** 列宽 = 容器宽度 - 所有的列间距宽度 */
    columnWidth: 0,
  });

  const [heightState, setHeightState] = useState({
    /** 每列高度 */
    columnHeightObj: Array(column).fill(0),
    /** 容器高度 = 最高的这一列的高度 */

    containerHeight: 0,
  });

  const [improveData, setImproveData] = useState<StyleItem[]>([]);

  // const oData = computedData(data);

  /**计算容器宽度 */
  const useComputedContainerWidth = () => {
    if (containerRef.current) {
      const { paddingLeft, paddingRight } = getComputedStyle(
        containerRef.current,
        null,
      );
      const containerWitdh =
        containerRef.current.offsetWidth -
        parseFloat(paddingLeft) -
        parseFloat(paddingRight);

      const newState = {
        ...state,
        containerLeft: parseFloat(paddingLeft),
        containerWitdh,
        columnWidth: (containerWitdh - columnSpacingCount) / column,
      };
      setState(newState);
    }
  };

  const waitImgComplate = () => {
    let itemElements = Array.from(
      document.querySelectorAll('.m-waterfall-item'),
    ).map((item) => item.getElementsByTagName('img'));
  };

  /**
   * 定位每一个item到正确位置
   */
  const useLocationItem = () => {
    const itemHeights = useItemHeight();

    const columnHeightObj = Array.from(heightState.columnHeightObj);
    const newData = data.map((item, index) => {
      if ((item as any)._style) {
        return item as StyleItem;
      }
      const obj: StyleItem = { ...item, _style: { left: 0, top: 0 } };
      const { height, column } = getMinHeightColumn(columnHeightObj);

      obj._style.left = getItemLeft(column);
      obj._style.top = getItemTop(height);
      const addHeight = itemHeights.shift() || 0;
      columnHeightObj[column] = height + addHeight;
      return obj;
    });

    setImproveData([...improveData, ...newData]);
    setHeightState({
      ...heightState,
      columnHeightObj,
      containerHeight: Math.max(...columnHeightObj),
    });
  };

  useEffect(() => {
    // 组件加载完计算容器布局信息和item宽度
    useComputedContainerWidth();
  }, [column, columnSpacing]);

  useEffect(() => {
    if (state.columnWidth && data.length) {
      useLocationItem();
    }
  }, [state, data]);

  return (
    <ul
      ref={containerRef}
      className={classnames('relative', className)}
      style={{
        height: heightState.containerHeight,
      }}
    >
      {state.columnWidth &&
        data.length &&
        (improveData.length
          ? improveData.map((item, index) => (
              <li
                key={nodeKey ? (item as any)[nodeKey] : index}
                className="m-waterfall-item absolute duration-300"
                style={{
                  width: state.columnWidth,
                  // height: '100px',
                  left: item._style?.left || 0 + 'px',
                  top: item._style?.top || 0 + 'px',
                }}
              >
                {rendeChild(item, index, state.columnWidth)}
              </li>
            ))
          : data.map((item, index) => (
              <li
                key={nodeKey ? (item as any)[nodeKey] : index}
                className="m-waterfall-item absolute duration-300"
                style={{
                  width: state.columnWidth,
                  // height: '100px',
                  left: 0 + 'px',
                  top: 0 + 'px',
                }}
              >
                {rendeChild(item, index, state.columnWidth)}
              </li>
            )))}
    </ul>
  );
}

Waterfall.defaultProps = {
  column: 2,
  columnSpacing: 20,
  rowSpacing: 20,
  picturePreReading: true,
};
export default Waterfall;
