import { AboutDarkTheme } from '@v-thomas/about/theme';
import styled, { ThemeProvider } from 'styled-components';
import Routes from './routes/router';

const StyledApp = styled.main`
  background: ${({ theme }) => theme.background.primary};
  min-height: 100vh;
  max-width: 100%;
`;

export function App() {
  return (
    <ThemeProvider theme={AboutDarkTheme}>
      <StyledApp>
        <Routes />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
