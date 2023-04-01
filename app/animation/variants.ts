import { Variants } from 'framer-motion';

export const tooltip: Variants = {
   initial: {
      // opacity: 0,
      rotateX: '90deg',
   },
   animate: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
         type: 'spring',
         damping: 7,
      },
   },
   exit: {
      rotateX: '90deg',
      opacity: 0,
      transition: {
         duration: 0.3,
         ease: 'linear',
      },
   },
};
