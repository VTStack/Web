import { useState } from 'react';

export const useToggle = (initial = false): [boolean, () => void] => {
  const [toggle, setToggle] = useState(initial);

  return [toggle, () => setToggle(val => !val)];
};
