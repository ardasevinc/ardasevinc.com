import { cn } from '@/lib/utils';

type TitleProps = {
  children: string;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={cn(
        'font-heading font-semibold animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%] inline-block',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
