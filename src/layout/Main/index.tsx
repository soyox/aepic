import Waterfall from '@/libs/Waterfall';
import classNames from 'classnames';
import { HTMLAttributes, useEffect, useLayoutEffect, useState } from 'react';
import List from './List';
import Navigation from './Navigation';
interface MainPropsBase {}
export type MainProps = MainPropsBase & HTMLAttributes<HTMLElement>;
const Main = ({ className, ...restProps }: MainProps) => {
  // const [otherState, setOtherState] = useState<{ name: string; age: number }[]>(
  //   [],
  // );
  // useEffect(() => {
  //   setTimeout(() => {
  //     setOtherState([
  //       { name: 'soyo', age: 1 },
  //       { name: 'jack', age: 2 },
  //       { name: 'jack2', age: 3 },
  //       { name: 'jack3', age: 4 },
  //       { name: 'jack4', age: 5 },
  //       { name: 'jack5', age: 6 },
  //       { name: 'jack6', age: 7 },
  //       { name: 'jack8', age: 8 },
  //       { name: 'jack9', age: 9 },
  //       { name: 'jack10', age: 10 },
  //       { name: 'jack11', age: 11 },
  //     ]);
  //   }, 2000);
  // }, []);

  return (
    <main
      id="test-main"
      {...restProps}
      className={classNames(
        'overflow-auto bg-white dark:bg-zinc-800 duration-300 h-full',
        className,
      )}
    >
      <Navigation></Navigation>

      <div className={`max-w-screen-xl mx-auto relative m-1 xl:mt-4`}>
        {/* <Waterfall
          nodeKey="age"
          column={5}
          data={otherState}
          rendeChild={(item, index, columnWidth) => (
            <div
              style={{
                height: (index || 1) * 100,
                backgroundColor: `#${String(Math.random()).slice(-6)}`,
              }}
              className="border"
              key={item.name}
            >
              {item.name}
              {index} |{columnWidth}
            </div>
          )}
        /> */}
        <List></List>
      </div>
    </main>
  );
};

export default Main;
