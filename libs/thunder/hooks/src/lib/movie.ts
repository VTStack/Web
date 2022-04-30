import { useMovies } from '.';
import { MoviesEntity } from '@v-thomas/thunder/types';
import { initialMoviesState } from '@v-thomas/thunder/data-access';

export const useMovie = (
  movieId: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): { movie: MoviesEntity; clearMovies: () => void; addMovie: (movie: any) => void } => {
  const { movies, clearMovies, addMovie } = useMovies();

  return {
    movie: movies.filter((v: { id: string }) => v.id === movieId)[0] || initialMoviesState,
    clearMovies,
    addMovie
  };
};
