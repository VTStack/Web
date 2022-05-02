import { ApiMovieModel, DBGroupModel } from '../../types';
import axios from 'axios';
import { url } from '../url';

export const addMovieToGroup = async (movie: ApiMovieModel, groupId: DBGroupModel['id']) => {
  try {
    const id = movie.id;
    const { data: result } = await axios.post(
      url + `/groups/${groupId}/movies`,
      {
        ...movie,
        // eslint-disable-next-line camelcase
        movie_id: id
      },
      { withCredentials: true }
    );
    return [result, null];
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return [null, e.toJSON().status];
  }
};

export const getGroupFromId = async (groupId: string) => {
  try {
    const { data: group } = await axios.get(url + `/groups/${groupId}`, { withCredentials: true });
    return [group, null];
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return [null, e.toJSON().status];
  }
};

export const createGroup = async (groupName: DBGroupModel['name']) => {
  try {
    const { data: result } = await axios.post(
      url + '/groups',
      {},
      { params: { name: groupName }, withCredentials: true }
    );
    return [result, null];
  } catch (e) {
    return [null, e];
  }
};
