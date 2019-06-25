import React from 'react';

import { StyledWrapper, StyledInner, StyledTitle } from './styled';
import Search from './Search';

const AppBar = () => {
    return(
        <StyledWrapper>
            <StyledInner>
                <StyledTitle>News Feed</StyledTitle>
                <Search />
            </StyledInner>
        </StyledWrapper>
    )
}

export default AppBar;
