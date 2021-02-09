import React, { Component } from 'react';
import * as api from '../api'
import ArticlesCard from './ArticlesCard'
import ErrorDisplayer from './ErrorDisplayer'

class ArticleByAuthor extends Component {

    state={
        articles: [],
        errMessage : '',
        isLoading: true,
    }

    componentDidMount() {
        this.fetchArticlesByAuthor(this.props.author)
    }
    render() {
        const {articles, errMessage} = this.state;
        if(this.state.isLoading === true) {
            return <img className='loading' src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47jsvriuti9367kth1dv181fu679bvvaj9ock6ptyl&rid=giphy.gif' alt='loading' />
        }
        if(errMessage) {return <ErrorDisplayer msg={errMessage} />}
        return (
            <main>
                {articles.map((article, index) => {
                return <ArticlesCard key={article.article_id} index={index} {...article} handleLikeClick={this.handleLikeClick}/>
                    })}
            </main>
        );
    }
    handleLikeClick = (event, index) => {
        event.preventDefault()
        const article_id = this.state.articles[index].article_id;
        api.postVote(event.target.id, article_id).then((article) => {
            this.setState((currentState) => {
                const articleUpdatedVotes = currentState.articles[index]
                articleUpdatedVotes.votes = article.data.article.votes
                return currentState;
            })
        })
    }
    fetchArticlesByAuthor = (author) => {
        api.getArticlesByAuthor(author).then((articles) => {
             this.setState({articles, isLoading: false})
        }).catch(({response:{data:{msg}}}) => {
            this.setState({errMessage: msg, isLoading: false})
        })
    }
}

export default ArticleByAuthor;