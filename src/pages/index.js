import React from "react";
import GlobalStyle  from '../theme/GlobalStyles';
import MainPage from '../layouts/MainPage'; 
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

export default function Home(props) {
  console.log(props);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </>
  
    )
}
