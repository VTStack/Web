type Operations = 'UPDATE';

type dataTypes = 'INVITE';

type actionType = `${Operations}_${dataTypes}`;

export interface inviteState {
  invite: {
    id: string;
  };
  user: { id: string };
  owner: { id: string };
  group: { id: string; name: string };
}

export const inviteReducer = (
  state: { type: 'UPDATE_INVITE' },
  action: { payload: Partial<inviteState>; type: actionType }
) => {
  switch (action?.type) {
    case 'UPDATE_INVITE':
      return action.payload;
  }
};
