import React, { Component } from 'react';
import Buttons from './Buttons'
import ArticlesCard from './ArticlesCard'
import * as api from '../api'

class ArticleList extends Component {
    state = {
        isLoading: true,
        articles: [],
    }

    componentDidMount() {
        this.fetchArticles()
    }

    render() {
        const {articles} = this.state;
        return (
            <>
                <Buttons />
                <main className='articles-container'>
                    {articles.map((article) => {
                        return <ArticlesCard key={article.article_id} {...article} />
                    })}
                </main>
                
            </>
        );
    }
    fetchArticles() {
        api.getAllArticles().then((articles) => {
            this.setState({articles, isLoading: false});
        });
    }
}

export default ArticleList;