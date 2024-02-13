'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MenuContent from '@/data/menu.json';

const ActiveRoute = () => {
  const pathname = usePathname();

  return (
    <Link href={pathname}>
      <p className='font-heading font-semibold md:text-lg'>
        {MenuContent.find((item) => item.href === pathname)?.label || ''}
      </p>
    </Link>
  );
};

export default ActiveRoute;
