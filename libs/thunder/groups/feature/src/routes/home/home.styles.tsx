import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { GroupsEntity } from '@v-thomas/thunder/types';
import GroupCard from './components/group-card/group-card';

const SGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-auto-rows: 5rem;
  gap: 2rem;
`;
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 }
};

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.0625,
      duration: 1
    }
  },
  exit: {
    opacity: 0
  }
};

export const GroupGrid = ({ groups }: { groups: any }) => {
  console.log(groups);
  return (
    <SGrid key="modal" variants={container} initial="initial" animate={'animate'} exit={'exit'}>
      {groups.data.map((group: GroupsEntity, index: number) => (
        <GroupCard
          group={group}
          variants={item}
          key={index}
          whileHover={{
            y: -5
          }}
          transition={{}}
          exit={{
            opacity: 0
          }}
        />
      ))}
    </SGrid>
  );
};
