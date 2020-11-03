import styled from 'styled-components';

const ReadButton = styled.button`
    display: block;
    width: ${({ theme }) => theme.size.readButton.widthMobile };
    height: ${({ theme }) => theme.size.readButton.heightMobile };
    margin: 10px auto 50px auto;
    border-radius: 20px;
    border: none;    
    background: #592F66;
    background: -webkit-linear-gradient(bottom left, #592F66, #B63855);
    background: -moz-linear-gradient(bottom left, #592F66, #B63855);
    background: linear-gradient(to top right, #592F66, #B63855);
    
    h2 {
        font-size: 16px;
        text-transform: uppercase;
        color: white;

    }

    @media(min-width:1280px){
        margin: 0 0 10px 20px;
        display: block;
        align-self: start;
        justify-self: end;
    }
`;

export default ReadButton;
