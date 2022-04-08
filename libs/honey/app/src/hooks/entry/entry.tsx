// import { v4 as uuid } from 'uuid';
import { v4 as uuid } from 'uuid';

const getEntries = () => {
  if (!localStorage.getItem('entries'))
    localStorage.setItem('entries', JSON.stringify([{ colId: '', entries: [] }]));

  return JSON.parse(localStorage.getItem('entries') as string);
};
const modEntries = ({ entries, colId }: any) => {
  localStorage.setItem('entries', JSON.stringify([...getEntries()]));
};

export function useEntry(entryId: string | number) {
  const { ids, data }: { ids: number[]; data: any[] } = getEntries();
  const id = ids.filter(v => v === entryId).at(0);

  const entry = data.filter(v => v.id === id).at(0);

  const updateEntries = ({
    name,
    description,
    price
  }: {
    name: string;
    description: string;
    price: string;
  }) => {
    const newId = uuid();

    const { ids, data } = getEntries();

    modEntries({ ids: [...ids, newId], data: [...data, { name, description, price, id: newId }] });
  };

  return { data: entry, updateEntries };
}

// export function useEntry(EntriId: string | number): any {
//   const { ids, data }: { ids: string[]; data: any } = getEntries();
//   const id = ids.filter(v => v === EntriId).at(0);
//   const Entri = data
//     .filter((v: any) => {
//       return v.id === id;
//     })
//     .at(0);

//   return Entri || null;
// }

// const createEntry = ({
//   ids,
//   data,
//   name,
//   description
// }: {
//   data: any;
//   ids: string[];
//   name: string;
//   description: string;
// }) => {
//   const newId = uuid();
//   console.log(ids, data);
//   ids.push(newId);
//   data.push({
//     id: newId,
//     name,
//     description,
//     createdAt: new Date()
//   });
//   updateEntries({ ids, data });
// };

// export function useEntries(Colid: string) {
//   const { data, ids }: { data: any[]; ids: string[] } = getEntries();
//   const id = ids.filter(v => v === Colid).at(0);
//   const realData = data
//     .filter((v: any) => {
//       return v.id === id;
//     })
//     .at(0);
//   return {
//     data: realData,
//     createEntry: ({ name, description }: { name: string; description: string }) =>
//       createEntry({ ids, data: realData, name, description })
//   };
// }
