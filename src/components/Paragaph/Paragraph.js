import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.Paragraph.fontSize.mobile};
    margin-top: 8px;

    @media(min-width: 1280px) {
        font-size: ${({ theme }) => theme.Paragraph.fontSize.laptop};
        margin-top: 0px;
        margin-left: 10px;

    }
`;

export const FirstContentParagraph = styled.p`
    font-size: ${({ theme }) => theme.ContentParagraph.fontSize.mobile};
    text-align: left;
    font-weight: bold;
    margin-bottom: 10px;

    @media(min-width: 768px){
        font-size: ${({ theme }) => theme.ContentParagraph.fontSize.tablet};

    }
    @media(min-width: 1280px){
        font-size: ${({ theme }) => theme.ContentParagraph.fontSize.laptop};
        
    }
`;

export const ContentParagraph = styled.p`
    font-size: ${({ theme }) => theme.ContentParagraph.fontSize.mobile};
    margin-bottom: 10px;

    @media(min-width: 768px){
        font-size: ${({ theme }) => theme.ContentParagraph.fontSize.tablet};

    }
    @media(min-width: 1280px){
        font-size: ${({ theme }) => theme.ContentParagraph.fontSize.laptop};
        
    }
`;
