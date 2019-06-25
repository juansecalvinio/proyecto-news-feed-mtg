import React, { Component } from 'react';
import Container from './../components/Container';

import api from './../utils/api';
import { categoriesId } from './../utils/constants';

class Internacional extends Component {
    state = {
        isLoading: false,
        news: [],
    }

    componentDidMount() {
        this.fetchNews();
    }

    async fetchNews() {
        this.setState({ isLoading: true });
        try {
            const news = await api.category(categoriesId.internacional);
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
        return (
            <Container news={news} category={'Internacional'} />
        )
    }
}

export default Internacional;
