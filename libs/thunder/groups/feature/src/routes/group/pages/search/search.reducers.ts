/* eslint-disable @typescript-eslint/no-explicit-any */
export const searchReducer = (
  state: any,
  action: { payload: { already?: any; movies?: any; popular?: boolean } }
): any => {
  const realMovies = action.payload.movies?.filter((searchResults: any) => {
    const { id } = searchResults;
    return !action.payload.already.includes(id);
  });
  return { ...action.payload, movies: realMovies };
};
