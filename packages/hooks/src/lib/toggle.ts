import { useState } from 'react';

export const useToggle = (initial = false): [boolean, (value?: boolean) => void] => {
  const [toggle, setToggle] = useState(initial);
  return [toggle, (value?: boolean) => setToggle(val => (value ? value : !val))];
};
