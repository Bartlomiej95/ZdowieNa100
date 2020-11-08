import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle  from '../theme/GlobalStyles';
import Header from '../organisms/Header/Header';
import { ContentParagraph, FirstContentParagraph } from '../components/Paragaph/Paragraph';
import { theme } from '../theme/theme';
import { ContentSubHeading, ContentTitleHeading } from '../components/Heading/Heading';

const MainWrapper = styled.div`
    margin: 50px 20px 0 20px;

    img {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
    }

    @media(min-width:768px){
        margin: 10px 20px 10px 20px;
    }

    @media(min-width: 1280px){
        margin: 10px 30px 10px 30px;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    
`;

const ArticleContentPage = (props) => {
    const { post } = props.pageContext;
    const { content } = props.pageContext.post;

    console.log(post)

    return(
        <>  
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                <MainWrapper>
                    <ImageWrapper>
                        <img src={post.image.url} alt="obrazek główny artykułu"/>
                    </ImageWrapper>
                    
                    <ContentTitleHeading>{post.title}</ContentTitleHeading>
                    <FirstContentParagraph>{post.paragraph}</FirstContentParagraph>
                    
                    <div>
                        {
                            content.map(item => {
                                const itemKeys = Object.keys(item);                            
                                
                                switch (itemKeys[0]){
                                    case 'heading':
                                        return (<ContentSubHeading>{item[itemKeys]}</ContentSubHeading>)
                                
                                    case 'paragraph':
                                        return <ContentParagraph>{item[itemKeys]}</ContentParagraph>
                                    case 'image':
                                        return <img src={item[itemKeys].url} />
                                    default: 
                                        return console.log('jestem w null');
                                }
                            })
                        }

                    </div>
                </MainWrapper>
               
        
            </ThemeProvider>
        </>
    )
}

export default ArticleContentPage;