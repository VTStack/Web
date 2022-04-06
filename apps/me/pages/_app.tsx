import { DarkTheme } from '@v-thomas/shared/theme';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import '@v-thomas/shared/styles';
import '@v-thomas/shared/web-utils';
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Head>
        <title>Welcome to me!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
