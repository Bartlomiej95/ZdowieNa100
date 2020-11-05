import React from 'react';
import styled from 'styled-components';
import owoceImg from '../../../static/assets/owoce.jpg';
import biegImg from '../../../static/assets/bieg.jpg';
import medytacjaImg from '../../../static/assets/medytacja.jpg';
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

const Banner = () => {
    return(
        <BannerSectionWrapper>
            <MainSubHeadingDiv>
                <MainSubHeading>Blog poświęcony zdrowemu stylowi życia</MainSubHeading>
            </MainSubHeadingDiv>
            <BannerCard image={owoceImg}/>
            <BannerCard image={biegImg}/>
            <BannerCard image={medytacjaImg}/>
        </BannerSectionWrapper>
    )
}

export default Banner;