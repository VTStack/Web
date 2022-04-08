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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const inviteReducer = (state: any, action: { payload: Partial<inviteState>; type: actionType }) => {
  switch (action?.type) {
    case 'UPDATE_INVITE':
      return action.payload;
  }
};
