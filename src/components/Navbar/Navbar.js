import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    display: none;

    @media(min-width: 768px){
        display: block;


        h2 {
            font-size: 17px;
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