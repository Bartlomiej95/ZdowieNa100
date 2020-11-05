import React from 'react';
import GlobalStyle  from '../theme/GlobalStyles';
import Header from '../organisms/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';


const ArticleContentPage = (props) => {
    console.log(props);
    return(
        <>  
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
               
        
            </ThemeProvider>
        </>
    )
}

export default ArticleContentPage;