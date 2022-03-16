import axios from 'axios';
import { url } from '../url';

export const signUp = async (email: string, password: string) => {
  return await axios.post(url + '/api/auth/signup', {
    email,
    password
  });
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data: response } = await axios.post(url + '/api/auth/login', {
      email,
      password
    });
    document.cookie = 'access_token=' + response.access_token + '; ; expires=Thu, 18 Dec 2022 12:00:00 UTC';
    return [response, null];
  } catch (e) {
    return [null, e];
  }
};

export const signOut = async () => {
  try {
    const { data: response } = await axios.post(url + '/api/auth/logout');
    return [response, null];
  } catch (e) {
    return [null, e];
  }
};

export const checkAuth = async () => {
  try {
    const { data: result } = await axios.get(url + '/api/auth/status');
    return result.status === 'AUTHED';
  } catch {
    return false;
  }
};

export const getUser = async () => {
  const { data: result } = await axios.get(url + '/api/auth/user');
  return result;
};
