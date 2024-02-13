'use client';

import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { MenuIcon } from 'lucide-react';
import MenuContent from '@/data/menu.json';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant={'ghost'} className='rounded-full'>
            <MenuIcon className='w-8 h-8 text-foreground' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={20} align='end' alignOffset={10}>
          <DropdownMenuLabel>Dropdown menu label</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>An Item</DropdownMenuItem>
          <DropdownMenuItem>Another Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={'ghost'} className='rounded-full p-0'>
          <MenuIcon className='w-8 h-8 text-foreground' />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer Description</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>Drawer Footer</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;
