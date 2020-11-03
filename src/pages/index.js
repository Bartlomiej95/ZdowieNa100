import React from "react";
import styled from 'styled-components';
import GlobalStyle  from '../theme/GlobalStyles';
import menuIcon from '../../static/assets/menuIcon.svg';
import BannerCard from '../components/BannerCard/BannerCard';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import owoceImg from '../../static/assets/owoce.jpg';
import biegImg from '../../static/assets/bieg.jpg';
import medytacjaImg from '../../static/assets/medytacja.jpg';
import owsiankaImg from '../../static/assets/owsianka.jpg';
import authorImg from '../../static/assets/author.svg';
import Paragraph from '../components/Paragaph/Paragraph';
import Navbar from '../components/Navbar/Navbar';
import { MainHeading } from '../components/Heading/Heading';
import { MainSubHeading } from '../components/Heading/Heading';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { SectionHeading } from '../components/Heading/Heading';



const HeadSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  img {
    flex: 2;

    @media(min-width: 768px) {
      display: none;
    }
  }

  div {
    flex: 10;
    text-align:center;
  }

  @media(min-width: 1280px){
    flex-direction: column;
  }
`;

const BannerSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;

  @media(min-width: 1280px){
    margin-top: 150px;
  }

`;

const MainSubHeadingDiv = styled.div`
  width: 100%;

  @media(min-width: 1280px){
    display: none;
  }
`;

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



export default function Home() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeadSectionWrapper>
          <img src={menuIcon} alt="menu icon"></img>
          <div> 
            <MainHeading>ZdrowieNa100%</MainHeading>
            <MainSubHeading className={'inTheOtherPlace'}>Blog poświęcony zdrowemu stylowi życia</MainSubHeading>
          </div>
          <Navbar />
        </HeadSectionWrapper>
        <BannerSectionWrapper>
          <MainSubHeadingDiv>
            <MainSubHeading>Blog poświęcony zdrowemu stylowi życia</MainSubHeading>
          </MainSubHeadingDiv>
          <BannerCard image={owoceImg}/>
          <BannerCard image={biegImg}/>
          <BannerCard image={medytacjaImg}/>
        </BannerSectionWrapper>
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
      </ThemeProvider>
    </>
  
    )
}
