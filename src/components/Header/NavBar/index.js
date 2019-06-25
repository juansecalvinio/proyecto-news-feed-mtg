import React, { Component } from 'react';
import { StyledNav, StyledList, StyledItem, StyledLink } from './styled';

class NavBar extends Component {

    render(){
        return(
            <StyledNav>
                <StyledList>
                    <StyledItem>
                        <StyledLink to="/">Home</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink to="/categoria/politica">Política</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink to="/categoria/internacional">Internacional</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink to="/categoria/tech">Tech</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink to="/categoria/deportes">Deportes</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink to="/categoria/espectaculos">Espectáculos</StyledLink>
                    </StyledItem>
                </StyledList>
            </StyledNav>
        )
    }
}

export default NavBar;