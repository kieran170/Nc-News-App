import React from 'react';
import LikeCount from './LikeCount'
import {Link, Router} from '@reach/router'

const ArticlesCard = (props) => {
    return (
        <section className='article-card'>
            <Link to={`/article/${props.article_id}`} article={props} className='article-title'>{props.title}</Link>    
            <p>Topic: {props.topic}</p>
            <Link to={`/articles-by-author/${props.author}`}>Author: {props.author}</Link>
            <p>{props.created_at}</p>
            <p>Votes: {props.votes}</p>
            <p>comments: {props.comment_count}</p>
            <LikeCount handleLikeClick={props.handleLikeClick} location={props.index}/>
        </section>
    );
};

export default ArticlesCard;
