import React from 'react'
import { StyledContainer } from './styled';
import Card from './Card';

const NewsContainer = (props) => {
    return (
        <StyledContainer>
            {props.news.map(data => <Card data={data} key={data.news_id}></Card>)}
        </StyledContainer>
    )
}

export default NewsContainer;
