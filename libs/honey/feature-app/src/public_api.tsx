import { useCollection, useCollections } from './hooks/collection';

const AppRoutes = () => {
  const collection = useCollection('id1');
  console.log(useCollections());
  return (
    <>
      {JSON.stringify(collection)} <div>jhello</div>
    </>
  );
};
export default AppRoutes;
