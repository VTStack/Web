import { useState } from 'react';

export const useToggle = (initial: boolean | [unknown, unknown] = false): [unknown, () => void] => {
  const [toggle, setToggle] = useState(initial instanceof Array ? initial[0] : initial);

  const doToggle = () => {
    setToggle((val: unknown) => {
      const initialIsArray = initial instanceof Array;

      if (initialIsArray) return val === initial[0] ? initial[1] : initial[0];
      else return !val;
    });
  };
  return [toggle, doToggle];
};
