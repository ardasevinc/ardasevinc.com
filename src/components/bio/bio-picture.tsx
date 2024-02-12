import Image from 'next/image';
import ProfilePic from '@/assets/arda-pfp.jpg';

const BioPicture = () => {
  return (
    <Image
      src={ProfilePic}
      alt='Arda Sevinc profile picture, standing before the swiss alps'
      loading='eager'
      className='rounded-lg w-[300px] mx-auto'
    />
  );
};

export default BioPicture;
