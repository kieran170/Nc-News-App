import React from 'react';
import LikeCount from './LikeCount'
import {Link} from '@reach/router'

const ArticlesCard = ({title, body, author, created_at, topic, votes, article_id, handleLikeClick, index}) => {
    
    return (
        <section className='article-card'>
            <h1 className='article-title'>{title}</h1>
            <p>Topic: {topic}</p>
            <p>Author: {author}</p>
            <p>{body}</p>
            <p>{created_at}</p>
            <p>Votes: {votes}</p>
            <LikeCount handleLikeClick={handleLikeClick} location={index}/>
        </section>
    );
};

export default ArticlesCard;
