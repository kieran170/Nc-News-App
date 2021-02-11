import React from 'react';
import LikeCounter from './LikeCount'
import {Link} from '@reach/router'

const SingleArticleCard = (props) => {
    const {body, title, author, votes, comment_count, article_id} = props.article
    return (
    <div className='single-article-container'>
        <h2 className='single-article-title'>{title}</h2>
        <p className='single-article-body' >{body}</p>
        <Link className='single-author' to={`/articles-by-author/${author}`}>Author: {author}</Link>
        <br></br>
        <LikeCounter id={article_id} votes={votes}/>
  </div>
    );
};

export default SingleArticleCard;