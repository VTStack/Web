import { Button } from '@v-thomas/core-ui';

/* eslint-disable-next-line */
export interface RemoveMovieProps {
  onClick: () => void;
}

export function RemoveMovieButton(props: RemoveMovieProps) {
  return (
    <Button variant="outlined" color="error" onClick={props.onClick}>
      Remove movie
    </Button>
  );
}
