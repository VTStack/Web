import { FC, lazy, Suspense } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Test = lazy(() => import('./modal'));

export const CheckServer: FC = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Test />
    </Suspense>
  );
};
