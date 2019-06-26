import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { StyledForm, StyledInputWrapper, StyledInput } from './styled';

export class Search extends Component {

    state = {
        value: '',
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ value });
    }

    handleSearch = (event) => {
        const { history } = this.props;
        const { value } = event.target;
        // const { history } = this.props;
        if(event.key === 'Enter') {
            event.preventDefault();            
            history.push(`/busqueda/${value}`);
            this.setState({ value: '' });
        }
    }

    render() {
        const { value } = this.state;
        return (
            <StyledForm>
                <StyledInputWrapper>
                    <i className="fas fa-search"></i>
                    <StyledInput value={value} onChange={this.handleChange} onKeyDown={this.handleSearch} />
                </StyledInputWrapper>
            </StyledForm>
        )
    }
}

export default withRouter(Search);
