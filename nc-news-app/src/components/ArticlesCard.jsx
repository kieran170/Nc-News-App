import React from 'react';
import LikeCount from './LikeCount'
import {Link} from '@reach/router'

const ArticlesCard = ({title, body, author, created_at, topic, votes, handleLikeClick, index, article_id, comment_count}) => {
    
    return (
        <section className='article-card'>
            <Link to={`/article/${article_id}`}className='article-title'>{title}</Link>
            <p>Topic: {topic}</p>
            <Link to={`/articles-by-author/${author}`}>Author: {author}</Link>
            <p>{body}</p>
            <p>{created_at}</p>
            <p>Votes: {votes}</p>
            <p>comments: {comment_count}</p>
            <LikeCount handleLikeClick={handleLikeClick} location={index}/>
        </section>
    );
};

export default ArticlesCard;
