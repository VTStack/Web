import { useAuth } from '@v-thomas/thunder/hooks';

import { Route } from 'react-router-dom';
import { InvitePage } from './pages/group';

export const FeatureInviteRouter = () => {
  useAuth('/');

  return <Route path="group/:inviteId" element={<InvitePage />} />;
};
