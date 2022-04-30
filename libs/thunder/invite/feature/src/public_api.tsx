import { Route } from 'react-router-dom';
import { InvitePage } from './pages/group';

export const FeatureInviteRouter = () => {
  return <Route path="group/:inviteId" element={<InvitePage />} />;
};
