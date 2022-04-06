import { Button, Divider, Link, Text } from '@v-thomas/shared/ui';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { PrivateNavbar } from '@v-thomas/thunder/ui';
import { useNavigate } from 'react-router-dom';
import RemoveMovieButton from '../../../../app/src/components/remove-movie/remove-movie';
import { useSnackbar } from 'notistack';
import * as React from 'react';

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
  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
  min-height: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: max(400px, 20%);
  position: relative;
  top: 0;
  width: 100%;

  padding: 2rem 3rem 2rem 3rem;
  @media screen and (max-width: 1400px) {
    padding: 0;
    margin: 0;
    background-color: unset;
    width: auto;
  }
`;

const InfoPod = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  padding: 1rem;
  width: 300px;
  border-radius: 5px;
  display: grid;

  grid-template-columns: 1fr;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const View = styled.div`
  max-width: 100%;
`;

const Poster = styled.img`
  border-radius: 10px;
  object-fit: cover;
  @media screen and (max-width: 920px) {
    width: min(100%, 300px);
    margin: 0 auto;
  }
`;

export function MovieLayout({ children, poster, title }: MovieProps) {
  const router = useNavigate();

  const toBack = () => router('..');

  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  return (
    <>
      <PrivateNavbar
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
          {poster ? (
            <Poster src={`https://image.tmdb.org/t/p/w300${poster}`} alt="" />
          ) : (
            <Text>Loading image...</Text>
          )}
          <InfoPod>
            <Link>Go to top</Link>
            <Link>Go to bottom</Link>
          </InfoPod>
        </LeftContainer>
        <View>{children}</View>
      </MainContainer>
    </>
  );
}
