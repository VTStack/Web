import { lazy } from 'react';

export const FeatureGroupsRouter = lazy(() =>
  import('@v-thomas/thunder/groups/feature').then(v => ({ default: v.FeatureGroupsRouter }))
);
export const FeatureInviteRouter = lazy(() =>
  import('@v-thomas/thunder/invite/feature').then(v => ({ default: v.FeatureInviteRouter }))
);

export const HomePage = lazy(() =>
  import('@v-thomas/thunder/other-pages').then(v => ({ default: v.HomePage }))
);

export const NotFoundPage = lazy(() =>
  import('@v-thomas/thunder/other-pages').then(v => ({ default: v.NotFoundPage }))
);
