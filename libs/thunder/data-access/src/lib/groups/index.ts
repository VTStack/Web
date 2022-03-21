import axios from 'axios';
import { url } from '../url';

export const getAllGroups = async () => {
  try {
    const { data: response } = await axios.get(url + '/groups/all');
    return [response, null];
  } catch (e) {
    return [null, e];
  }
};
