import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className='pt-[2.6rem] w-full h-full container'>{children}</main>
    </>
  );
};

export default MainLayout;
