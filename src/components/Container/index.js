import React, { Component } from 'react';
import { StyledContainer, StyledHero, StyledDivider } from './styled';
import NewsContainer from './NewsContainer';

class Container extends Component {
    render() {
        const { category, news } = this.props;
        return (
            <StyledContainer>
                <StyledHero>{category}</StyledHero>
                <StyledDivider></StyledDivider>
                <NewsContainer news={news} />
            </StyledContainer>
        )
    }    
}

export default Container;

