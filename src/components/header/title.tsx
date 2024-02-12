type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className='font-heading font-semibold animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]'>
      {children}
    </h1>
  );
};

export default Title;
