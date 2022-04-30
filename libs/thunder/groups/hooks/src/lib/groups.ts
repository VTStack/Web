import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { addDoc, collection } from 'firebase/firestore';
interface GroupsProps {
  idField: string;
}

export const useGroups = (props: GroupsProps = { idField: '_id' }) => {
  const firestore = useFirestore();

  const colRef = collection(firestore, 'groups');

  const groupsData = useFirestoreCollectionData(colRef, { idField: props.idField });

  const createGroup = ({ groupName }: { groupName: string }) => {
    const docRef = collection(firestore, 'groups');

    return addDoc(docRef, {
      name: groupName
    });
  };

  return {
    groupsData,
    createGroup
  };
};
