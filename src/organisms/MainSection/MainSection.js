import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import Paragraph from '../../components/Paragaph/Paragraph';
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


export const query = graphql`
query MyQuery{
  allDatoCmsArticle {
    nodes {
      title
      paragraph
      label
      image {
        url
      }
    }
  }
}

`;

const MainSection = ({ category }) => {

  const data = useStaticQuery(query)
  
  //wybieramy artykuły z konkretnego działu tzn. np. dla działu odżywianie 
  const filteredData = data.allDatoCmsArticle.nodes.filter(node => node.label === category);  

    return(
        <>
            <MainSectionWrapper>
            <ArticleWrapper>
                <SectionHeading>Aktualności</SectionHeading>
                {
                  // sprawdzamy czy przekazaliśmy zmienną category - w przypadku braku przekazania tej zmiennej będzie oznaczać, że
                  // jesteśmy na stronie głównej, więc nie chcemy podziału na kategorie - chcemy wyświetlać wszystko
                  category ? ( filteredData.map(node => 
                    <ArticleCard title={node.title} label={node.label} paragraph={node.paragraph} image={node.image.url} />
                  )) : ( data.allDatoCmsArticle.nodes.map(node => 
                    <ArticleCard title={node.title} label={node.label} paragraph={node.paragraph} image={node.image.url} />
                  ))
                } 
            </ArticleWrapper>
            <SectionAside>
                <AboutAuthor>
                    <h2>O autorze</h2>
                    <img src={authorImg} alt="author image" />
                    <Paragraph className={"aboutAuthor"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                </AboutAuthor>
            </SectionAside>
            </MainSectionWrapper>
        </>
    )
}

export default MainSection;