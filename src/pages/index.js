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

  img {
    flex: 2;
  }

  div {
    flex: 10;
    text-align:center;
  }
`;

const BannerSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;

`;

const MainSubHeadingDiv = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const SectionAside = styled.aside`
  text-align: center;

`;

const AboutAuthor = styled.div`

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
          </div>
          
        </HeadSectionWrapper>
        <BannerSectionWrapper>
          <MainSubHeadingDiv>
            <MainSubHeading>Blog poświęcony zdrowemu stylowi życia</MainSubHeading>
          </MainSubHeadingDiv>
          <BannerCard image={owoceImg}/>
          <BannerCard image={biegImg}/>
          <BannerCard image={medytacjaImg}/>
        </BannerSectionWrapper>
        <SectionHeading>Aktualności</SectionHeading>
        <ArticleCard image={owsiankaImg} title={'Śniadanie najlepszym kopniakiem do dalszej części dnia !'} />
        <ArticleCard image={owsiankaImg} title={'Śniadanie najlepszym kopniakiem do dalszej części dnia !'} />
        <SectionAside>
          <AboutAuthor>
              <h2>O Autorze</h2>
              <img src={authorImg} alt="author image" />
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
          </AboutAuthor>
        </SectionAside>

      </ThemeProvider>
    </>
  
    )
}
