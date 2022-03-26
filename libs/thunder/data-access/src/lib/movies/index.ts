import axios from 'axios';
import { url } from '../url';

export const getAllMovies = async (groupId: string) => {
  try {
    const { data: result } = await axios.get(url + `/groups/${groupId}/movies`, { withCredentials: true });
    return [result, null];
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return [null, e?.toJSON().status];
  }
};

export const getMovieRecommendations = async (groupId: string, searchString?: string) => {
  try {
    if (!searchString) {
      const { data: result } = await axios.get(
        url + `/groups/${groupId}/movies/recommendations`,

        { withCredentials: true }
      );
      return [result, null];
    }
    const { data: result } = await axios.get(
      url + `/groups/${groupId}/movies/recommendations?query=${searchString}`,
      { withCredentials: true }
    );
    return [result, null];
  } catch (e) {
    return [null, e];
  }
};

export const getMovieFromId = async (movieId: string, groupId: string) => {
  try {
    const { data: result } = await axios.get(url + `/groups/${groupId}/movies`, {
      params: { movie_id: movieId },
      withCredentials: true
    });
    return [result, null];
  } catch (e) {
    return [null, e];
  }
};

export const getMoviePreview = async (movieId: string, groupId: string) => {
  try {
    const { data: result } = await axios.get(url + `/groups/${groupId}/movies/preview`, {
      params: { movie_id: movieId },
      withCredentials: true
    });
    return [result, null];
  } catch (e) {
    return [null, e];
  }
};

export const getExistingMoviesBySearch = async (groupId: string, searchTerm: string) => {
  try {
    const { data: result } = await axios.get(url + `/groups/${groupId}/movies/search`, {
      params: { search: searchTerm },
      withCredentials: true
    });
    return [result, null];
  } catch (e) {
    return [null, e];
  }
};
