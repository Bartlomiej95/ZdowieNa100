import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
  }
  *{
    margin: 0;
    padding: 0;
  }

  .inTheOtherPlace {
    display: none;

    @media(min-width: 1280px){
      display: block;
      font-size: 24px;
    }
  }

  .aboutAuthor {
    @media(min-width: 1280px){
      width: 80%;
      margin: 0 auto;
      font-size: 24px;
    }
  }
  
`

export default GlobalStyle;