import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.Paragraph.fontSize.mobile};
    margin-top: 8px;

    @media(min-width: 1280px) {
        font-size: ${({ theme }) => theme.Paragraph.fontSize.laptop};
        margin-top: 0px;

    }
`;


export default Paragraph;