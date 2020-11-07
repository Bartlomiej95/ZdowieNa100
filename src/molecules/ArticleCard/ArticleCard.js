import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../components/Paragaph/Paragraph';
import ReadButton from '../../components/Buttons/Buttons';

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 100px;
    padding-left: 20px;
    
    /* width: 90vw; */
    

    @media(min-width: 1280px){
        display: flex;
        flex-direction: row;
        height: 500px;
        padding-right: 5px;
    }
`;

const ContentWrapper = styled.div`
    @media(min-width: 1280px){
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;

        margin: 10px 10px 5px 10px;
    }
`;

const DivImg = styled.div`
    width: 100%;
    height: 250px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: center;

    @media(min-width: 768px){
        height: 380px;
    }

    @media(min-width: 1280px){
        flex:1;
        height: 100%;
    }
`;

const WrapperLabel = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
    width: ${({ theme }) => theme.size.label.widthMobile};
    height: ${({ theme }) => theme.size.label.heightMobile};
    border-radius: 20px;
    background: rgb(54,109,61);
    background: linear-gradient(90deg, rgba(54,109,61,1) 0%, rgba(107,218,121,1) 100%);
    

    label {
        display: block;
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.label.mobile};
        color: white;
        margin: 0 auto;
        text-align: center;
        line-height: ${({ theme }) => theme.size.label.heightMobile};
    }

    @media(min-width: 780px) {
        width: ${({ theme }) => theme.WrapperLabel.widthTablet};
        height: ${({ theme }) => theme.WrapperLabel.heightTablet};

        label {
            line-height:${({ theme }) => theme.WrapperLabel.heightTablet};
        }
    }
`;

const TitleArticle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.titleArticle.mobile};
    text-align: center;
    text-transform: bold;
    margin-top: 10px;

    @media(min-width: 1280px) {
        text-align: left;
        font-size: ${({ theme }) => theme.TitleArticle.fontSize.laptop};
        margin-left: 10px;
    }
`;




const ArticleCard = ({ image, label, title, paragraph }) => {

    return(
        <>
            <Wrapper>
                <DivImg image={image}>
                    <WrapperLabel>
                    <label>{label}</label>
                    </WrapperLabel>
                </DivImg>
                
                <ContentWrapper>
                    <TitleArticle>{title}</TitleArticle>
                    <Paragraph>{paragraph}</Paragraph>
                    <ReadButton><h2>Czytaj teraz</h2> </ReadButton>
                </ContentWrapper>
               

            </Wrapper>
        </>

    )
}

export default ArticleCard;