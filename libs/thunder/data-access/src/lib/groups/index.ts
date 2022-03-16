import axios from 'axios';
import { url } from '../url';

export const getAllGroups = async () => {
  try {
    const { data: response } = await axios.get(url + '/api/groups/all');
    return [response, null];
  } catch (e) {
    return [null, e];
  }
};
