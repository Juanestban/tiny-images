import cn from 'classnames';
import { Link, type LinkProps } from 'react-router-dom';

const Anchor = ({ className, children, ...props }: LinkProps) => {
  return (
    <Link className={cn('p-2 hover:underline hover:text-blue-300', className)} {...props}>
      {children}
    </Link>
  );
};

export { Anchor };
