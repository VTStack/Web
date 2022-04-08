import { useAuth } from '../../hooks/auth';

import { Routes, Route, Navigate } from 'react-router-dom';
import { GroupsHomePage } from './groups/pages/home';
import { GroupRoute } from './group/group-route';
import styled from 'styled-components';
import { InvitePage } from './invite/group/invite';
import { NotFoundPage } from '../other/404';

const Root = styled.div`
  padding: 2rem;
`;

export const PrivateRootRoutes = () => {
  useAuth('/');

  return (
    <Root>
      <Routes>
        <Route path="/" element={<Navigate to="groups" replace />} />

        <Route path="group" element={<Navigate to="/app/groups" />} />
        <Route path="group/:groupId/*" element={<GroupRoute />} />

        <Route path="groups" element={<GroupsHomePage />} />

        <Route path="/invite/group/:inviteId" element={<InvitePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Root>
  );
};
