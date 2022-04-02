import { Variants } from 'framer-motion';

export const IslandContainerVariant: Variants = {
  show: { transition: { staggerChildren: 1 } },
  exit: { opacity: 0 }
};

export const IslandVariant: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      delay: 0.2,
      staggerChildren: 1
    }
  }
};
