import React from 'react';
import LikeCounter from './LikeCount'

const SingleArticleCard = (props) => {
    const {body, title, author, votes, comment_count, article_id} = props.article
    return (
    <div className='single-article-container'>
        <h2 className='single-article-title'>{title}</h2>
        <p className='single-article-body' >{body}</p>
        <p className='single-author'>Author: {author}</p>
        <p className='single-comments'>Comments: {comment_count}</p>
        <br></br>
        <LikeCounter id={article_id} votes={votes}/>
  </div>
    );
};

export default SingleArticleCard;