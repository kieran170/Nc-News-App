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
                <Buttons handleOrderClick={this.handleOrderClick}/>
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
        api.postVote().then((res)=> {
            console.log(res)
        })
        // const copyArticles = {...this.state.articles}
        // copyArticles[index].votes += 1
        //patch request to increase votes
        this.setState(() => {
        })
    }
}

export default ArticleList;