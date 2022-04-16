/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuid } from 'uuid';

const getCollections = () => {
  if (localStorage.getItem('collections')) {
    return JSON.parse(localStorage.getItem('collections') || '{}');
  } else return { ids: [], data: [] };
};
const updateCollections = ({ ids, data }: any) => {
  localStorage.setItem('collections', JSON.stringify({ ids, data }));
};
export function useCollection(collectionId: string | number): any {
  const { ids, data }: { ids: string[]; data: any } = getCollections();
  const id = ids.filter(v => v === collectionId).at(0);
  const collection = data
    .filter((v: any) => {
      return v.id === id;
    })
    .at(0);

  return collection || null;
}

const createCollection = (ids: string[], data: any) => {
  const newId = uuid();
  ids.push(newId);
  data.push({
    id: newId,
    name: '',
    description: '',
    createdAt: new Date()
  });
  updateCollections({ ids, data });
};

export function useCollections() {
  const { data }: { data: any } = getCollections();

  return { data, createCollection };
}
