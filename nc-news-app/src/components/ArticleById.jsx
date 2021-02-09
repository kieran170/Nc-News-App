import React, { Component } from 'react';
import * as api from '../api'
import ErrorDisplayer from './ErrorDisplayer';


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
    render() {
        const {body, title, author, votes, comment_count} = this.state.article
        const {errMessage, comments} = this.state
        if(this.state.isLoading === true) {
            return <img className='loading' src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47jsvriuti9367kth1dv181fu679bvvaj9ock6ptyl&rid=giphy.gif' alt='loading' />
        }
        if(errMessage) {return <ErrorDisplayer msg={errMessage} />}
        return (
            <>
                <div className='single-article-container'>
                    <h2 className='single-article-title'>{title}</h2>
                    <p className='single-article-body' >{body}</p>
                    <p className='single-author'>Author: {author}</p>
                    <p className='single-comments'>Votes: {votes}</p>
                    <p className='single-comments'>Comments: {comment_count}</p>
                    <br></br>
                    <button>👍</button>
                    <button>👎</button>
              </div>
              <ul className='all-comments-container'>
                  <h2 className='comment-title'>Comments</h2>
                  {comments.map((comment) => {
                      return(
                            <li className='single-comment-container' key={comment.comment_id}>
                                <p className='single-comment' >{comment.body}</p>
                                <p className='comment-vote'>Votes: {comment.votes}</p>
                                <button>👍</button>
                                <button>👎</button>
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