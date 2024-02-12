import Navbar from '@/components/header/navbar';

const Header = () => {
  return (
    <header className='mx-2 p-4 rounded-full sticky top-[0.8rem] backdrop-blur-lg shadow-lg'>
      <Navbar />
    </header>
  );
};

export default Header;
