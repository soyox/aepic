import { HTMLAttributes } from 'react';

export type Floating = HTMLAttributes<HTMLElement>;
export default function Floating({ className, ...restProps }: Floating) {
  return (
    <nav className={'fixed bottom-10 right-2' + ' ' + className} {...restProps}>
      <h1>Floating</h1>
    </nav>
  );
}
