import React, { Component } from 'react';
import Container from './../components/Container';

import api from './../utils/api';

class Home extends Component {

    state = {
        isLoading: false,
        latestNews: [],
    }

    async componentDidMount() {
        
        try {    
            this.setState({ isLoading: true });        
            const latestNews = await api.latest();
            this.setState({ latestNews: latestNews.slice(0, 10)});
        } catch(error) {
            console.error(error);
        } finally {
            this.setState({ isLoading: false });
        }        
    }

    render() {
        const { latestNews } = this.state;
        return (
            <Container news={latestNews} category={'Home'} />
        )
    }    
}

export default Home;
