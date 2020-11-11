import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Navbar from '../../molecules/Navbar/Navbar';
import menuIcon from '../../../static/assets/menuIcon.svg';
import { MainHeading, MainSubHeading } from '../../components/Heading/Heading';

const HeadSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  img {
    flex: 2;

    ${({hiddenMenu}) => 
      hiddenMenu && css`
        display: none;
      `
    }

    @media(min-width: 768px) {
      display: none;
    }
  }

  div {
    flex: 10;
    text-align:center;
  }

  @media(min-width: 1280px){
    flex-direction: column;
  }
`;



const Header = () => {

  const [hiddenMenu, setHiddenMenu] = useState(false);

    return(
      <>
        <HeadSectionWrapper>
          <img src={menuIcon} alt="menu icon" onClick={() => setHiddenMenu(!hiddenMenu)}></img>
          
          <div> 
            <MainHeading>ZdrowieNa100%</MainHeading>
            <MainSubHeading className={'inTheOtherPlace'}>Blog poświęcony zdrowemu stylowi życia</MainSubHeading>
          </div>
          <Navbar statusMenu={hiddenMenu}/>
        </HeadSectionWrapper>
        
      </>
    )
}


export default Header;