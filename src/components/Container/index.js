import React from 'react';
import { StyledContainer, StyledHero, StyledDivider } from './styled';
import NewsContainer from './NewsContainer';

const Container = () => {
    return (
        <StyledContainer>
            <StyledHero>Category</StyledHero>
            <StyledDivider></StyledDivider>
            <NewsContainer />
        </StyledContainer>
    )
}

export default Container;

