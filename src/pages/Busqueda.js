import React, { Component } from 'react'
import Container from './../components/Container';

import api from './../utils/api';

export class Busqueda extends Component {

    state = {
        isLoading: false,
        news: [],
    }

    componentDidMount() {
        this.fetchNews();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.query !== this.props.match.params.query) {
            this.fetchNews();
        }
    }

    async fetchNews() {
        this.setState({ isLoading: true });
        const query = this.props.match.params.query;
        try {
            const news = await api.search(query);
            this.setState({ news: news.slice(0, 10) });
            console.log(this.state.news);
        } catch (error) {
            console.error(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { news } = this.state;
        const { query } = this.props.match.params;
        return (
            <Container news={news} category={query} />
        )
    }
}

export default Busqueda;
