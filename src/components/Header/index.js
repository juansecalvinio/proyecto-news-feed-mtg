import React from 'react';
import { StyledHeader } from './styled';
import AppBar from './AppBar';
import NavBar from './NavBar';

const Header = () => {
    return(
        <StyledHeader>
            <AppBar />
            <NavBar />
        </StyledHeader>
    )
}

export default Header;