import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fontSize.paragraph.mobile};
    margin-top: 8px;
`;

export default Paragraph;