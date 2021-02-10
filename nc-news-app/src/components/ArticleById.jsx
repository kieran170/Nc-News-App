import React, { Component } from 'react';
import * as api from '../api'
import ErrorDisplayer from './ErrorDisplayer';
import LikeCounter from './LikeCount'
import Loader from './Loader'
import SingleArticleCard from './SingleArticleCard';
import AddComment from './AddComment'
import DeleteComment from './DeleteComment';


class ArticleById extends Component {

    state={
        article: {},
        errMessage: '',
        isLoading: true,
        comments: []
    }

    componentDidMount() {
        this.fetchArticleById(this.props.article_id)
        this.fetchArticleComments(this.props.article_id)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('updating')
        console.log(prevState)
    }
    render() {
        const {body, title, author, votes, comment_count, article_id} = this.state.article
        const {errMessage, comments} = this.state
        if(this.state.isLoading === true) {
            return <Loader />
        }
        if(errMessage) {return <ErrorDisplayer msg={errMessage} />}
        return (
            <>
            <SingleArticleCard article={this.state.article}/>
            <AddComment article_id={article_id}/>
              <ul className='all-comments-container'>
                  <h3 className='article-comment-title'>Comments</h3>
                  {comments.map((comment) => {
                      return(
                            <li className='single-comment-container' key={comment.comment_id}>
                                <p className='single-comment' >{comment.body}</p>
                                <p className='comment-author'>Author: {comment.author}</p>
                                <LikeCounter name='comments' id={comment.comment_id} votes={comment.votes}/>
                                {comment.author === 'jessjelly' ? <DeleteComment comment_id={comment.comment_id} /> : null}
                            </li>
                      )
                  })}
              </ul>
            </>
        );
    }
    fetchArticleById = (article_id) => {
        api.getArticleById(article_id).then((article) => {
            this.setState({article, isLoading: false})
        }).catch(({response:{data:{msg}}}) => {
            this.setState({errMessage: msg, isLoading: false})
        })
    }
    fetchArticleComments = (article_id) => {
        api.getArticleComments(article_id).then((comments) => {
            this.setState({comments, isLoading: false})
        })
    }
}

export default ArticleById;
