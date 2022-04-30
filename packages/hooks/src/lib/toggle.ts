import { useState } from 'react';

export const useToggle = (initial: boolean | [unknown, unknown] = false): [unknown, () => void] => {
  const [toggle, setToggle] = useState(initial instanceof Array ? initial[0] : initial);

  return [
    toggle,
    () =>
      setToggle((val: unknown) => {
        if (initial instanceof Array) {
          if (val === initial[0]) {
            return initial[1];
          } else {
            return initial[0];
          }
        } else {
          return !val;
        }
      })
  ];
};
