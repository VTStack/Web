import { removeMovie } from '@v-thomas/root/libs/thunder/data-access/src/public_api';
import { Button } from '@v-thomas/shared/ui';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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
