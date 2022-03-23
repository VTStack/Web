import { Button, Divider } from '@v-thomas/shared/core-ui';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Navbar } from '../../routes/group/components/navbar';
import { useNavigate } from 'react-router-dom';
import RemoveMovieButton from '../../components/remove-movie/remove-movie';
import { useSnackbar } from 'notistack';

export interface MovieProps {
  children: ReactNode;
  poster: string;
  title: string;
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding-bottom: 0px;
  gap: 2rem;

  @media screen and (max-width: 960px) {
    display: flex;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  min-height: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  position: relative;
  top: 0;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 2rem;
  @media screen and (max-width: 960px) {
    padding: 0;
    margin: 0;
    background-color: unset;
  }
`;
const MoviePod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    align-items: center;
    position: static;
    max-width: 100%;
  }
`;
// const InfoPod = styled.div`
//   background: ${({ theme }) => theme.background.third};
//   padding: 1rem;
//   width: 300px;
//   border-radius: 5px;
//   display: grid;

//   grid-template-columns: 1fr;

//   @media screen and (max-width: 960px) {
//     display: none;
//   }
// `;

const View = styled.div`
  max-width: 100%;
`;

const Poster = styled.img`
  border-radius: 10px;
  @media screen and (min-width: 1400px) {
    height: 100%;
  }
`;

export function MovieLayout({ children, poster, title }: MovieProps) {
  const router = useNavigate();

  const toBack = () => router('..');

  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  return (
    <>
      <Navbar
        leftButtons={
          <Button variant="text" onClick={toBack}>
            Go Back
          </Button>
        }
        rightButtons={
          <RemoveMovieButton
            onClick={() =>
              void enqueueSnackbar('This feature will be added soon...', {
                key: 'feature-soon',
                action: (
                  <Button variant="text" onClick={() => void closeSnackbar('feature-soon')}>
                    Ok
                  </Button>
                ),

                preventDuplicate: true
              })
            }
          />
        }
        title={title}
      />
      <Divider />
      <MainContainer>
        <LeftContainer>
          <MoviePod>
            <Poster src={`https://image.tmdb.org/t/p/w300${poster}`} alt="" />
            {/* <InfoPod>
              <Link onClick={toTop}>Go to top</Link>
              <Link onClick={toBottom}>Go to bottom</Link>
            </InfoPod> */}
          </MoviePod>
        </LeftContainer>
        <View>{children}</View>
      </MainContainer>
    </>
  );
}
