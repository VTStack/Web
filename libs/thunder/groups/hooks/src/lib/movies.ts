import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { collection } from 'firebase/firestore';
import { ApiRequests } from '@v-thomas/thunder/groups/utils';
import { ApiMovieModel } from '@v-thomas/thunder/groups/types';

interface Props {
  groupId: string;
  idField?: string;
}

export const useMovies = ({ groupId, idField = '_id' }: Props) => {
  const firestore = useFirestore();

  const colRef = collection(firestore, `groupData/${groupId}/movies`);

  const movieData = useFirestoreCollectionData(colRef, { idField });

  // const addMovie = (movie: any) => {};

  const getRecommendedMovies = async (): Promise<ApiMovieModel[]> => {
    const response = await fetch(ApiRequests.GET_POPULAR_MOVIES);
    const { results } = await response.json();
    return results;
  };

  return { movies: movieData.data, movieData: movieData, getRecommendedMovies };
};
