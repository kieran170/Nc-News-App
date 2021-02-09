import React, { Component } from 'react';
import * as api from '../api'
import ArticlesCard from './ArticlesCard'

class ArticleByAuthor extends Component {

    state={
        articles: []
    }

    componentDidMount() {
        this.fetchArticlesByAuthor(this.props.author)
    }
    render() {
        const {articles} = this.state;
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
             this.setState({articles})
        })
    }
}

export default ArticleByAuthor;