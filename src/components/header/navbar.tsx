import Title from '@/components/header/title';
import Link from 'next/link';

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav>
      <Link href='/'>
        <Title>Arda Sevinç</Title>
      </Link>
    </nav>
  );
};

export default Navbar;
