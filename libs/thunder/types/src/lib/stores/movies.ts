import { EntityState } from '@reduxjs/toolkit';

export interface MoviesEntity {
  id: string;
  title: string;
  overview: string;
  groupId: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  movie_id: string;
  adult: string;
  ytKey: string;
}

export interface MoviesState extends EntityState<MoviesEntity> {
  loadingStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED' | 'ERROR';
  error: string | null;
  groupId: string | null;
}
