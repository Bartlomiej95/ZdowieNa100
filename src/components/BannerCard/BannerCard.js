import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: auto 21px;
    padding: 10px;
    width: 40%;

    h3 {
        text-align: center;
    }
`;

const ImageDiv = styled.div`
    /* width: ${({ theme }) => theme.BannerImageDiv.widthMobile}; */
    width: 100%;
    height: ${({ theme }) => theme.BannerImageDiv.heightMobile};
    background-image: url(${props => props.bcgImg});
    background-origin: content-box;
    background-position: center;
    background-size: cover;

    img{
        max-width: 100%;
        max-height: 100%;
    }

    @media(min-width: 768px){
        width: ${({ theme }) => theme.BannerImageDiv.widthTablet};
        height: ${({ theme }) => theme.BannerImageDiv.heightTablet};
    }
`;

const LinkRead = styled(Link)`
    text-decoration:underline;
    font-size: 14px;
    text-align: center;
`;


const BannerCard = ({ image }) => {
    return(
        <Wrapper>
            <ImageDiv bcgImg={image} />
            <h3>Kategoria</h3>
            <h3>Tytuł</h3>
            <LinkRead to="/">CZYTAJ WIĘCEJ</LinkRead>
        </Wrapper>
    )
}

export default BannerCard;