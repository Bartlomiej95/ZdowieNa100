import styled from 'styled-components';

export const MainHeading = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.h1.mobile};
`;

export const MainSubHeading = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.h2.mobile};
    color: ${({ theme }) => theme.color.h2};
    text-align: center;
    margin-bottom: 10px;
`;

export const SectionHeading = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.h2.sectionHeadingMobile};
    margin: 77px auto;
    text-align: center;
    text-transform: uppercase;
`;