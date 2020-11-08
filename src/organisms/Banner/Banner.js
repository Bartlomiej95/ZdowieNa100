import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import BannerCard from '../../molecules/BannerCard/BannerCard';
import { MainSubHeading } from '../../components/Heading/Heading';

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

export const query = graphql`
query bannerArticle {
  allDatoCmsArticle(limit: 3) {
    nodes {
      title
      label
      image {
        url
      }
    }
  }
}`;

const Banner = () => {

  const data = useStaticQuery(query);
  
  return(
        <BannerSectionWrapper>
            <MainSubHeadingDiv>
                <MainSubHeading>Blog poświęcony zdrowemu stylowi życia</MainSubHeading>
            </MainSubHeadingDiv>
            {
              data.allDatoCmsArticle.nodes.map(node => 
                <BannerCard key={node.title} image={node.image.url} label={node.label} title={node.title} />  
              )
            }
        </BannerSectionWrapper>
    )
}

export default Banner;