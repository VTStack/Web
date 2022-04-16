import { Title } from '@v-thomas/shared/ui';
import { motion } from 'framer-motion';
export const AboutPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Title>This is the about page!</Title>
    </motion.div>
  );
};
