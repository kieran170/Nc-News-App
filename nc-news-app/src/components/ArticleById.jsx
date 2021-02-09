import React, { Component } from 'react';
import * as api from '../api'

class ArticleById extends Component {

    state={
        article: {}
    }

    componentDidMount() {
        this.fetchArticleById(this.props.article_id)
    }
    render() {
        console.log(this.state.article)
        const {body, title, author, votes, comment_count} = this.state.article
        return (
            <div className='single-article-container'>
                <h2 className='single-article-title'>{title}</h2>
                <p className='single-article-body' >{body}</p>
                <p className='single-author'>Author: {author}</p>
                <p className='single-comments'>Votes: {votes}</p>
                <p className='single-comments'>Comments: {comment_count}</p>
            </div>
        );
    }
    fetchArticleById = (article_id) => {
        api.getArticleById(article_id).then((article) => {
            this.setState({article})
        })
    }
}

export default ArticleById;