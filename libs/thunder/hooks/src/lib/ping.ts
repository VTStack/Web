import { pingServer } from '../../../data-access/src/public_api';

export const usePing = () => {
  return pingServer();
};
