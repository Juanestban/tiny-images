import { ComponentProps } from 'react';
import cn from 'classnames';

import s from './Button.module.css';

const Button = ({ className, children, ...props }: ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'hover:brightness-110 active:brightness-90 transition px-3 py-2',
        s.button,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
