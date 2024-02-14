import { ComponentProps } from 'react';
import cn from 'classnames';

const Label = ({ children, className, ...props }: ComponentProps<'label'>) => {
  return (
    <label className={cn('flex justify-between items-center gap-3', className)} {...props}>
      {children}
    </label>
  );
};

export { Label };
