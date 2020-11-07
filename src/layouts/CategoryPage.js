import React from 'react';
import GlobalStyle  from '../theme/GlobalStyles';
import Header from '../organisms/Header/Header';
import MainSection from "../organisms/MainSection/MainSection";
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';


const CategoryPage = ({ category }) => {
   
    return(
        <>  
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                <MainSection category={category}/>
     
            </ThemeProvider>
        </>
    )
}

export default CategoryPage;