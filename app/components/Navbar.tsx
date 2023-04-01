'use client';

import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiHome, BiLogIn } from 'react-icons/bi';
import { BsShop } from 'react-icons/bs';
import Tooltip from './Tooltip';

const Navbar = () => {
   return (
      <nav className='w-full h-[65px] flex justify-center items-center px-4 relative'>
         <ul className='flex justify-center items-center'>
            <MenuItem text='صفحه اصلی' href='/' icon={<BiHome size={22} />} />
            <MenuItem
               text='محصولات'
               href='/products'
               icon={<BsShop size={22} />}
            />
            <MenuItem text='ورود' href='/login' icon={<BiLogIn size={22} />} />
         </ul>
      </nav>
   );
};

const MenuItem = ({
   text,
   href,
   icon,
}: {
   text: string;
   href: string;
   icon: ReactNode;
}) => {
   const [hover, setHover] = useState(false);

   return (
      <motion.li
         onHoverStart={() => setHover(true)}
         onHoverEnd={() => setHover(false)}
         className='flex mx-10 transition relative'>
         <>
            <Link
               href={href}
               className='p-2 rounded-md hover:bg-zinc-200 transition'>
               {icon}
            </Link>
            <AnimatePresence mode='wait'>
               {hover && <Tooltip text={text} />}
            </AnimatePresence>
         </>
      </motion.li>
   );
};

export default Navbar;
