import { DarkTheme } from '@v-thomas/shared/theme';
import { AppProps } from 'next/app';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import '@v-thomas/shared/styles';
import '@v-thomas/shared/web-utils';

const Main = styled.main`
  background-color: ${({ theme }) => theme.background.primary};
  max-width: 100vw;
  min-height: 100vh;
`;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Head>
        <title>Vincent | Portfolio</title>
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default CustomApp;
