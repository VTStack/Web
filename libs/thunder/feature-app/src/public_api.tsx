import { GroupsHomePage } from './routes/groups/pages/home';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GroupRoute } from './routes/group/group-route';
import { useAuth } from './hooks/auth';
import { InviteRoute } from './routes/invite/invite.route';
import styled from 'styled-components';
export { GROUPS_FEATURE_KEY, groupsReducer } from '@v-thomas/thunder/data-access';
export { MOVIES_FEATURE_KEY, moviesReducer } from '@v-thomas/thunder/data-access';
export { INVITE_FEATURE_KEY, inviteReducer } from '@v-thomas/thunder/data-access';

const Root = styled.div`
  padding: 2rem;

  @media screen and (max-width: 800px) {
    padding: 0.5rem;
  }
`;

const FeatureApp = () => {
  useAuth('/');

  return (
    <Root>
      <Routes>
        <Route path="groups" element={<GroupsHomePage />} />
        <Route path="group/:groupId/*" element={<GroupRoute />} />

        <Route path="/" element={<Navigate to="groups" replace />} />
        <Route path="group" element={<Navigate to="/app/groups" />} />

        <Route path="/invite/*" element={<InviteRoute />} />
      </Routes>
    </Root>
  );
};
export default FeatureApp;
