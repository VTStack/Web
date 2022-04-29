import { pingServer } from '@v-thomas/thunder/data-access';

export const usePing = () => {
  return pingServer();
};
