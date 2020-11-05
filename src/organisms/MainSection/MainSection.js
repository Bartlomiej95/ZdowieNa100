import React from 'react';
import styled from 'styled-components';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import Paragraph from '../../components/Paragaph/Paragraph';
import owsiankaImg from '../../../static/assets/owsianka.jpg';
import authorImg from '../../../static/assets/author.svg';
import { SectionHeading } from '../../components/Heading/Heading';

const MainSectionWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 100px auto 40px auto;

  @media(min-width: 1280px){
    flex-direction: row;
  }
`;

const SectionAside = styled.aside`
  text-align: center;
  margin-bottom: 20px;
  
  img {
    margin: 10px 0;
  }

  @media(min-width: 768px){
    width: 50%;
    margin: 0 auto;

    img{
      margin: 20px 0 10px 0;
    }
  }

  @media(min-width: 1280px){
    width: 25%;
    margin: 0 auto;
    border-left: 1px #707070 solid; 
  }

`;

const ArticleWrapper = styled.div`
  width: 100%;

  @media(min-width: 1280px){
    width: 75%;
  }
`;

const AboutAuthor = styled.div`

  img {
    margin-top: 50px;
  }
`;


const MainSection = () => {
    return(
        <>
            <MainSectionWrapper>
            <ArticleWrapper>
                <SectionHeading>Aktualności</SectionHeading>
                <ArticleCard image={owsiankaImg} title={'Śniadanie najlepszym kopniakiem do dalszej części dnia !'} />
                <ArticleCard image={owsiankaImg} title={'Śniadanie najlepszym kopniakiem do dalszej części dnia !'} />
            </ArticleWrapper>
            <SectionAside>
                <AboutAuthor>
                    <h2>O Autorze</h2>
                    <img src={authorImg} alt="author image" />
                    <Paragraph className={"aboutAuthor"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                </AboutAuthor>
            </SectionAside>
            </MainSectionWrapper>
        </>
    )
}

export default MainSection;