import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragaph/Paragraph';
import ReadButton from '../Buttons/Buttons';

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 100px;
    /* width: 90vw; */
    
    margin: auto 21px auto 21px;

    img{
        width: 100%;
        max-height: 200px;
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
        line-height: 30px;
    }
`;

const TitleArticle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.titleArticle.mobile};
    text-align: center;
    text-transform: bold;
    margin-top: 10px;
`;


const ArticleCard = ({ image, title }) => {

    return(
        <>
            <Wrapper>
                <DivImg image={image}></DivImg>
                <WrapperLabel>
                    <label>Nazwa_kat</label>
                </WrapperLabel>
                <TitleArticle>{title}</TitleArticle>
                <Paragraph>To jest przykładowa strona. Strony są inne niż wpisy na blogu, ponieważ nie tylko znajdują się zawsze 
                    w jednym miejscu, ale także pojawiają się w menu witryny (w większości motywów). 
                    Większość użytkowników umieszcza na swoich witrynach stronę z informacjami o sobie, dzięki którym przedstawiają się
                    odwiedzającym ich witrynę.</Paragraph>
                <ReadButton><h2>Czytaj teraz</h2> </ReadButton>

            </Wrapper>
        </>

    )
}

export default ArticleCard;