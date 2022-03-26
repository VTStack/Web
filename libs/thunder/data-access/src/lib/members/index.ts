import axios from 'axios';
import { url } from '../url';

export const getAllMembersInGroup = async (groupId: string) => {
  return axios
    .get(url + `/members?group_id=${groupId}`, {
      withCredentials: true
    })
    .then(({ data: response }) => [response, null])
    .catch(({ data: response }) => [null, response]);
};
