import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { collection } from 'firebase/firestore';

interface GroupsProps {
  idField: string;
}

export const useGroups = ({ idField = '_id' }: GroupsProps) => {
  const firestore = useFirestore();

  const colRef = collection(firestore, 'groups');

  return useFirestoreCollectionData(colRef, { idField });
};
