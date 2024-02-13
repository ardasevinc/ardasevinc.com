import Navbar from '@/components/header/navbar';

const Header = () => {
  return (
    <header className='max-w-screen-md mx-2 md:mx-auto p-4 rounded-full sticky top-[0.8rem] backdrop-blur-lg shadow-lg bg-accent/70'>
      <Navbar />
    </header>
  );
};

export default Header;
