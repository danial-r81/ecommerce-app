'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { tooltip } from '../animation/variants';

const Tooltip = ({ text }: { text: string }) => {
   return (
      <motion.div
         variants={tooltip}
         initial='initial'
         animate='animate'
         exit='exit'
         className='flex justify-center items-center absolute right-[-69%] bottom-[-40px] origin-top'>
         <div className='w-3 h-3 rotate-45 absolute top-[-6px] bg-slate-700'></div>
         <p className='text-zinc-50 w-[90px] h-8 flex justify-center items-center bg-slate-700 rounded-md z-10'>
            {text}
         </p>
      </motion.div>
   );
};

export default Tooltip;
