import StormDB from 'stormdb';
import DB from '../db';
interface Collection {
  name: string;
  description: string;
}

export const addCollection = ({ name, description }: Collection): Collection[] => {
  if (
    !DB.get('collections')
      // @ts-ignore
      .filter(({ name: dbName }) => name === dbName)
      .value().length
  ) {
    console.log(
      DB.get('collections')
        // @ts-ignore
        .filter(({ name: dbName }) => name === dbName)
        .value()
    );
    (DB.get('collections').push({ name, description } as Collection) as unknown as StormDB).save();
  }
  return DB.get('collections').value();
};

export const removeCollection = (name: Collection['name']): Collection[] => {
  DB.get('collections').get({ name }).delete(true);
  return DB.get('collections').value();
};

export const getCollections = (): Collection[] => DB.get('collections').value();

export const getCollection = (name: Collection['name']): Collection | undefined =>
  DB.get('collections')
    // @ts-ignore
    .filter(i => {
      console.log(i === name);
      // @ts-ignore
      return i.name === name;
    })
    .value()[0];
