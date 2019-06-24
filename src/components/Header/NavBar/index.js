import React from 'react';
import { StyledNav, StyledList, StyledItem, StyledLink } from './styled';


const NavBar = () => {
    return(
        <StyledNav>
            <StyledList>
                <StyledItem>
                    <StyledLink to="/">Home</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/popular">Popular</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/politica">Política</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/internacional">Internacional</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/tech">Tech</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/deportes">Deportes</StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink to="/espectaculos">Espectáculos</StyledLink>
                </StyledItem>
            </StyledList>
        </StyledNav>
    )
}

export default NavBar;