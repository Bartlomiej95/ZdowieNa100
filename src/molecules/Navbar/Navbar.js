import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    display: none;

    @media(min-width: 768px){
        display: flex;
        margin-right: 21px;
        border-top: 1px rgba(112, 112, 112, .5) solid;
        border-bottom: 1px rgba(112, 112, 112, .5) solid;


        h2 {
            display: block;
            font-size: 17px;
            margin-left: 13px;
            font-weight: normal;
            padding: 10px 0;

            :last-child{
                margin-right: 13px;
            }

        }

    }

    @media(min-width: 1280px){
        display: flex;
        margin-right: 21px;
        border-top: 1px rgba(112, 112, 112, .5) solid;
        border-bottom: 1px rgba(112, 112, 112, .5) solid;

        h2{
            font-size: 38px;
            margin-left: 50px;
            padding: 15px 0;

            :last-child{
                margin-right: 50px;
            }
        }
    }

 
`;

const Navbar = () => {

    return(
        <NavbarWrapper>
            <h2>Strona Główna</h2>
            <h2>Odżywianie</h2>
            <h2>Nawyki</h2>
            <h2>Ruch</h2>
            <h2>Zdrowy duch</h2>
        </NavbarWrapper>
    )
}

export default Navbar;