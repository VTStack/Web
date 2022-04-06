import { ReactNode } from 'react';
import styled from 'styled-components';
import AwayListener from 'react-click-away-listener';
import { Col } from '../../public_api';
import { AnimatePresence, motion } from 'framer-motion';

/* eslint-disable-next-line */
export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  width?: string;
  onClickAway?: () => void;
  gap?: string;
}

const Background = styled(motion.div)`
  z-index: 999999999;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0 0 0 0;
  display: grid;
  place-items: center;
`;

const Inner = styled(motion.div)`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 10px;
  width: ${({ width = '10' }: { width?: string }) => `${width}rem`};
  max-width: 85vw;
`;

export function Modal({ isOpen, children, width, onClickAway = () => void 0, gap = '1' }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <Background initial={{ opacity: 0 }} animate={{ opacity: isOpen ? 1 : 0 }} exit={{ opacity: 0 }}>
          <AwayListener onClickAway={onClickAway}>
            <Inner
              width={width}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 0.25 }}>
              <Col gap={gap}>{children}</Col>
            </Inner>
          </AwayListener>
        </Background>
      ) : null}
    </AnimatePresence>
  );
}

// <AnimatePresence initial={false} exitBeforeEnter={true}>

// </AnimatePresence>

export default Modal;
