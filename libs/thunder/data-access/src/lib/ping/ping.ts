import axios from 'axios';
import { url } from '../url';

export const pingServer = async () => {
  try {
    const { data: response } = await axios.get(url + '/ping');
    return response?.ok;
  } catch {
    return false;
  }
};
