import React, { Component } from 'react';

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
        const { isLoading, latestNews } = this.state;
        return (
            <div>
                {isLoading && console.log('cargando...')}
                {latestNews.length > 0 && console.log(latestNews)}
            </div>
        )
    }    
}

export default Home;
