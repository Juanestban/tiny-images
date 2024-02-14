import { ComponentProps } from 'react';
import cn from 'classnames';

const FormControl = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('w-full mb-3', className)} {...props}>
      {children}
    </div>
  );
};

export { FormControl };
