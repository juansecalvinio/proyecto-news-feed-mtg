import React, { Component } from 'react';

import api from './../utils/api';
import { categoriesId } from '../utils/constants';

class Category extends Component {

    state = {
        isLoading: false,
        news: [],
    }

    componentDidMount() {
        this.getNewsByCategory();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.category !== this.props.match.params.category) {
            this.getNewsByCategory();
        }
    }

    async getNewsByCategory() {
        const { category } = this.props.match.params;
        const categoryId = categoriesId[category];
        this.setState({ isLoading: true });
        try {
            const news = await api.category(categoryId);
            this.setState({ news: news.slice(0, 10) })
        } catch(error) {
            console.error(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { isLoading, news } = this.state;
        const { category } = this.props.match.params;
        return (
            <div>
                {isLoading && console.log('cargando...')}
                {news.length > 0 &&
                    console.log(categoriesId[category]) &&
                    console.log(news)
                }
            </div>
        )
    }
}

export default Category;
