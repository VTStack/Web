import { useState } from 'react';

export const useToggle = (initial = false): [boolean, () => void] => {
  const [toggle, setToggle] = useState(initial);
  const doToggle = () => setToggle((val: unknown) => !val);
  return [toggle as boolean, doToggle];
};

export const usePagination = <T = boolean>(
  initial: T[]
): { currentState: T; next: () => void; previous: () => void } => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === initial.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  const previous = () => {
    if (index === 0) setIndex(initial.length - 1);
    else setIndex(index - 1);
  };

  return { currentState: initial[index], next, previous };
};
