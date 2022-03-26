const getCollections = () => {
  if (localStorage.getItem('collections')) {
    return JSON.parse(window.atob(localStorage.getItem('collections') || '{}'));
  } else return { ids: [], data: [] };
};
export function useCollection(collectionId: string) {
  const { ids, data }: { ids: string[]; data: any } = getCollections();
  const id = ids.filter(v => v === collectionId).at(0);
  const collection = data
    .filter((v: any) => {
      return v.id === id;
    })
    .at(0);
  return collection || null;
}

export function useCollections() {
  const { data }: { data: any } = getCollections();
  return data;
}
