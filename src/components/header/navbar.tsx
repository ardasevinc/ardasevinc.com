import ActiveRoute from '@/components/header/active-route';
import Menu from '@/components/header/menu';

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className='flex justify-between items-center'>
      <ActiveRoute />
      <Menu />
    </nav>
  );
};

export default Navbar;
