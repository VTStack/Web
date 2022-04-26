import { useState } from 'react';

export const useToggle = (initial = false): [boolean, (i?: boolean) => void] => {
  const [toggle, setToggle] = useState(initial);
  return [toggle, (i?: boolean) => setToggle(val => (i ? i : !val))];
};
