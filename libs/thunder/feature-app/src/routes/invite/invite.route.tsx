import { Route, Routes } from 'react-router-dom';
import { InvitePage } from './pages/group/invite';

export function InviteRoute() {
  return (
    <Routes>
      <Route path="group/:inviteId" element={<InvitePage />} />
    </Routes>
  );
}
