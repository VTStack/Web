import axios from 'axios';
import { url } from '../url';

export const signUp = async (email: string, password: string): Promise<[any, any]> => {
  try {
    const data = await axios.post(url + '/auth/signup', {
      email,
      password
    });
    return [data, null];
  } catch (e) {
    return [null, e];
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data: response } = await axios.post(
      url + '/auth/login',
      {
        email,
        password
      },
      { withCredentials: true }
    );
    return [response, null];
  } catch (e) {
    return [null, e];
  }
};

export const signOut = async () => {
  try {
    const { data: response } = await axios.post(url + '/auth/logout', {}, { withCredentials: true });
    return [response, null];
  } catch (e) {
    return [null, e];
  }
};

export const checkAuth = async () => {
  try {
    const { data: result } = await axios.get(url + '/auth/status', { withCredentials: true });
    return result.status === 'AUTHED';
  } catch {
    return false;
  }
};

export const getUser = async () => {
  const { data: result } = await axios.get(url + '/auth/user', { withCredentials: true });
  return result;
};
