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

    @media(min-width: 1280px){
        width: 30%;

        h3{
            font-size: 26px;
            margin: 10px 0;
        }
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
    align-self: center;
    align-content:center;

    img{
        max-width: 100%;
        max-height: 100%;
    }

    @media(min-width: 768px){
        width: 100%;
        height: ${({ theme }) => theme.BannerImageDiv.heightTablet};
    }

    @media(min-width: 1280px){
        width: 100%;
        height: ${({ theme }) => theme.BannerImageDiv.heightLaptop};
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