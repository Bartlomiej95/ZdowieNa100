import React from 'react';
import styled, { css }from 'styled-components';
import { Link } from 'gatsby';
import arrowMenu from '../../../static/assets/arrow.svg';

const NavbarWrapper = styled.nav`
    display: none;

    @media(min-width: 768px){
        display: flex;
        margin-right: 21px;
        border-top: 1px rgba(112, 112, 112, .5) solid;
        border-bottom: 1px rgba(112, 112, 112, .5) solid;


        Link, h2 {
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

        Link, h2{
            font-size: 38px;
            margin-left: 50px;
            padding: 15px 0;

            :last-child{
                margin-right: 50px;
            }
        }
    }
`;



const NavLink = styled(Link)`
    display: block;
    font-size: 17px;
    margin-left: 13px;
    font-weight: normal;
    padding: 10px 0;
    text-decoration:none;
    text-decoration: none;
    color: black;

    :hover{
        color: gray;
    }

    :last-child{
        margin-right: 13px;
    }

    @media(min-width: 1280px){
        font-size: 38px;
        margin-left: 50px;
        padding: 15px 0;

        :last-child{
            margin-right: 50px;
        }
    }
`;


const HiddenNavbar = styled.nav`
    
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #4A34D9;


    ${({ statusMenu }) => 
        statusMenu && css`
            display: block;
            position: fixed;
            width: 100vw;
                 
            Link {
                display: block;
            }     

        `
    };

    @media(min-width: 768px){
        display: none;
    }
`;


const Navbar = ({ statusMenu }) => {

    return(
        <>
            <NavbarWrapper>
                <NavLink to="/">Strona Główna</NavLink>
                <NavLink to="/nutrition">Odżywianie</NavLink>
                <NavLink to="/habits">Nawyki</NavLink>
                <NavLink to="/exercise">Ruch</NavLink>
                <NavLink to="/healthy-spirit">Zdrowy duch</NavLink>
            </NavbarWrapper>
            <HiddenNavbar statusMenu={statusMenu}>         
                <NavLink to="/">Strona Główna</NavLink>
                <NavLink to="/nutrition">Odżywianie</NavLink>
                <NavLink to="/habits">Nawyki</NavLink>
                <NavLink to="/exercise">Ruch</NavLink>
                <NavLink to="/healthy-spirit">Zdrowy duch</NavLink>
            </HiddenNavbar>
        </>
    )
}

export default Navbar;