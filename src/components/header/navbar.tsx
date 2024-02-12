import Title from '@/components/header/title';
import Menu from '@/components/header/menu';
import Link from 'next/link';

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className='flex justify-between items-center'>
      <Link href='/'>
        <Title>Arda Sevinç</Title>
      </Link>
      <Menu />
    </nav>
  );
};

export default Navbar;
