import React, { Component } from 'react';

import { StyledForm, StyledInputWrapper, StyledInput, StyledBar } from './styled';

export class Search extends Component {
    render() {
        return (
            <StyledForm>
                <StyledInputWrapper>
                    <StyledInput />
                    {/* <StyledBar /> */}
                </StyledInputWrapper>
            </StyledForm>
        )
    }
}

export default Search;
