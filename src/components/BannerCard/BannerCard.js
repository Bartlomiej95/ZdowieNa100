import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: auto 21px;
    padding: 10px;
`;

const ImageDiv = styled.div`
    width: 100%;
    height: 160px;
    background-image: url(${props => props.bcgImg});
    background-origin: content-box;
    background-position: center;
    background-size: cover;

    img{
        max-width: 100%;
        max-height: 100%;
    }
`;

const LinkRead = styled(Link)`
    text-decoration:underline;
    font-size: 14px;
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