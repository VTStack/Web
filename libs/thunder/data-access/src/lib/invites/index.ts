import axios from 'axios';
import { url } from '../url';

export enum ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

type Role = 'ADMIN' | 'USER';

export async function createInviteLink(groupId: string, role: Role): Promise<[string | null, number | null]> {
  try {
    const { data } = await axios.post(url + `/invite/create?group_id=${groupId}?role=${role}`);

    return [`http://localhost:4200/#/app/invite/${data.id}`, null];
  } catch (e) {
    return [null, 409];
  }
}

export async function getInviteFromId(inviteId: string) {
  try {
    const { data: response } = await axios.get(url + `/invite?invite_id=${inviteId}`);
    return [response, null];
  } catch (e) {
    return [null, e];
  }
}

export async function addMemberToGroup(inviteId: string) {
  const { data: response } = await axios.post(url + `/members?invite_id=${inviteId}`);
  return response;
}

export async function getUserInvites(groupId: string) {
  const { data: response } = await axios.get(url + '/invite/user_invites?group_id=' + groupId);
  return response;
}

export async function removeInvite(inviteId: string) {
  const { data: response } = await axios.delete(url + '/invite/remove_invite?invite_id=' + inviteId);
  return response;
}
