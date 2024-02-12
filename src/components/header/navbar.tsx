import Title from '@/components/header/title';

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav>
      <Title>Arda Sevinç</Title>
    </nav>
  );
};

export default Navbar;
