import BioPicture from '@/components/bio/bio-picture';
import Title from '../header/title';

const BioHero = () => {
  return (
    <section className='space-y-4 text-center'>
      <BioPicture />
      <p className='text-center text-2xl'>Hey 👋</p>
      <h1 className='text-2xl'>I&apos;m Arda</h1>
      <Title className='text-3xl'>I am a Web Developer</Title>
    </section>
  );
};

export default BioHero;
