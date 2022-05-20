import { HTMLAttributes } from 'react';
import Navigation from './Navigation';
interface MainPropsBase {}
export type MainProps = MainPropsBase & HTMLAttributes<HTMLElement>;
const Main = ({ ...restProps }: MainProps) => {
  return (
    <main {...restProps}>
      <Navigation></Navigation>
    </main>
  );
};

export default Main;
