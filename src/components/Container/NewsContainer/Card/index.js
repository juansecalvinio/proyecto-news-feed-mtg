import React from 'react';

import { StyledCard, StyledImg, StyledContent, StyledTitle, StyledSourceWrapper, StyledTime, StyledDivider, StyledSource } from './styled';

const Card = () => {
    return (
        <StyledCard>
            <StyledImg></StyledImg>
            <StyledContent>
                <StyledTitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, reprehenderit aut iure, deleniti qui maxime aliquam est odit necessitatibus quos exercitationem ipsum provident eaque sit voluptatem at hic! Illum, quasi.</StyledTitle>
                <StyledSourceWrapper>
                    <StyledTime>10.50</StyledTime>
                    <StyledDivider>|</StyledDivider>
                    <StyledSource>Diario</StyledSource>
                </StyledSourceWrapper>
            </StyledContent>
        </StyledCard>
    )
}

export default Card;
