import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { addDoc, collection, query, where } from 'firebase/firestore';
import { useAuth } from '@v-thomas/thunder/auth/hooks';
interface GroupsProps {
  idField: string;
}

export const useGroups = ({ idField }: GroupsProps = { idField: '_id' }) => {
  const firestore = useFirestore();

  const { user } = useAuth();

  const colRef = collection(firestore, 'groups');

  const dataQuery = query(colRef, where('ownerId', '==', user.data?.user?.uid || ''));

  const groupsData = useFirestoreCollectionData(dataQuery, { idField });

  const createGroup = ({ groupName, description }: { groupName: string; description: string }) => {
    if (!user.data.signedIn) {
      throw new Error('USER-NOT_SIGNED_IN');
    }

    const docRef = collection(firestore, 'groups');

    return addDoc(docRef, {
      name: groupName,
      description,
      ownerId: user.data?.user?.uid
    });
  };

  return {
    groupsData,
    createGroup
  };
};
