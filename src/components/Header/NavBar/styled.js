import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;    
    display: block;
    position: relative;
    padding: 15px 0;
    margin: 0 auto;    
    overflow: initial;    
    transition: all .35s ease-in;
    width: 100%;
    z-index: 100;
`;

export const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1108px;    
    padding: 0 20px;    
    -webkit-box-pack: justify;
`;

export const StyledItem = styled.li`
    flex: initial;
    margin-right: 14px;
`;

export const StyledLink = styled(Link)`
    background-color: transparent !important;
    border: none;
    color: #222222;
    display: flex;
    font-family: "Roboto Mono";
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.19px;
    padding: 7px 5px;
    transition: color .25s ease-in;
    text-decoration: none;

    &:hover {
        color: #1ABC9C;
        transition: color .25s ease-out;
    }
`;