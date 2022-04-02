import { useAuth } from '../../hooks/auth';

import { Routes, Route, Navigate } from 'react-router-dom';
import { GroupsHomePage } from './groups/pages/home';
import { GroupRoute } from './group/group-route';
import { InviteRoute } from './invite/invite.route';
import styled from 'styled-components';

const Root = styled.div`
  padding: 2rem;
`;

export const PrivateRootRoutes = () => {
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
