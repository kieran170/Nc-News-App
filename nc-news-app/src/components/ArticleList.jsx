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
        if(this.state.articles.length === 0) {
            return <img className='loading' src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47jsvriuti9367kth1dv181fu679bvvaj9ock6ptyl&rid=giphy.gif' alt='loading' />
        }
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