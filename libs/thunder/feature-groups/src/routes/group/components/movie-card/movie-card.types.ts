export interface MovieCardProps {
  movie: {
    backdrop_path: string;
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
  };
  duration: number;
}
