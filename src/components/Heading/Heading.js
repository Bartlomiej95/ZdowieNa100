import styled from 'styled-components';

export const MainHeading = styled.h1`
    font-size: ${({ theme }) => theme.MainHeading.fontSize.mobile};


    @media(min-width: 1280px){
        font-size: ${({ theme }) => theme.MainHeading.fontSize.laptop};
    }
`;

export const MainSubHeading = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.h2.mobile};
    color: ${({ theme }) => theme.color.h2};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.MainSubHeading.marginBottom.mobile};


    @media(min-width: 768px){
        font-size: ${({ theme }) => theme.fontSize.h2.tablet};
        margin-top: ${({ theme }) => theme.MainSubHeading.marginTop.tablet};
        margin-bottom: ${({ theme }) => theme.MainSubHeading.marginBottom.tablet};
    }

`;

export const SectionHeading = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.h2.sectionHeadingMobile};
    text-align: center;
    margin-bottom: 80px;
    text-transform: uppercase;
`;

export const ContentTitleHeading = styled.h2`
    font-size: 24px;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 30px;

    @media(min-width: 780px){
        font-size: 30px;

    }

    @media(min-width: 1280px){
        font-size: 36px;
        margin-top: 70px;
    }
`;

export const ContentSubTitleHeading = styled.h3`
    font-size: ${({ theme }) => theme.ContentTitleHeading.fontSize.mobile};
    text-align: left;
    margin: 10px 0;

    @media(min-width: 768px){
        font-size: ${({ theme }) => theme.ContentTitleHeading.fontSize.tablet};;

    }

    @media(min-width: 1280px){
        font-size: ${({ theme }) => theme.ContentTitleHeading.fontSize.laptop};;
        margin-top: 70px;
    }

`;

export const ContentSubHeading = styled.h3`
    font-size: ${({ theme }) => theme.ContentSubHeading.fontSize.mobile};
    margin: 20px 0;

    @media(min-width: 768px){
        font-size: ${({ theme }) => theme.ContentSubHeading.fontSize.tablet};
    
    }

    @media(min-width: 1280px){
        font-size: ${({ theme }) => theme.ContentSubHeading.fontSize.laptop};;
        margin: 30px 0;
    }

`;