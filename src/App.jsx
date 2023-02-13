import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { Routes } from './routes';

export function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}