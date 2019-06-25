import React from 'react';

import { StyledCard, StyledImg, StyledContent, StyledTitle, StyledSourceWrapper, StyledTime, StyledDivider, StyledSource } from './styled';

const Card = ({ data }) => {
    return (
        <StyledCard>
            <StyledImg src={data.img_url}></StyledImg>
            <StyledContent>
                <StyledTitle><a href={data.url} rel="noopener">{data.title}</a></StyledTitle>
                <StyledSourceWrapper>
                    <StyledTime>{data.date}</StyledTime>
                    <StyledDivider>|</StyledDivider>
                    <StyledSource>{data.source_name}</StyledSource>
                </StyledSourceWrapper>
            </StyledContent>
        </StyledCard>
    )
}

export default Card;
