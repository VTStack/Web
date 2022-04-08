export interface DBMovieModel {
  id: string;

  title: string;
  overview: string;
  adult: boolean;

  group_id: number;
  movie_id: number;

  backdrop_path: string;
  poster_path: string;

  budget: number;

  release_date: Date;
  created_at: Date;
}

export interface ApiMovieModel {
  id: number;

  title: string;
  overview: string;
  adult: boolean;

  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  backdrop_path: string;
  poster_path: string;
  budget: string;
}
