import React, { Component } from 'react';
import FilterButtons from './FilterButtons'
import ArticlesCard from './ArticlesCard'
import TrendingTopicsButtons from './TrendingTopicsButtons'
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
                <FilterButtons handleOrderClick={this.handleOrderClick}/>
                <TrendingTopicsButtons />
                <main className='articles-container'>
                    {articles.map((article, index) => {
                        return <ArticlesCard key={article.article_id} index={index} {...article} handleLikeClick={this.handleLikeClick}/>
                    })}
                </main>
                
            </>
        );
    }
    fetchArticles = () => {
        api.getAllArticles().then((articles) => {
            this.setState({articles, isLoading: false});
        });
    }
    handleOrderClick = (event) => {
        api.getAllArticles(event.target.id).then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }
    handleLikeClick = (event, index) => {
        event.preventDefault()
        const article_id = this.state.articles[index].article_id;
        const articleUpdatedVotes = this.state.articles[index]
        api.postVote(event.target.id, article_id).then((article) => {
            articleUpdatedVotes.votes = article.data.article.votes
            this.setState((currentState) => {
                return currentState.articles
            })
        })
    }
}

export default ArticleList;