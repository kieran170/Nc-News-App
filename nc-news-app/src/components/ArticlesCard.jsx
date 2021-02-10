import React from 'react';
import LikeCount from './LikeCount'
import {Link} from '@reach/router'

const ArticlesCard = (props) => {
    return (
        <section className='article-card'>
            <Link to={`/article/${props.article_id}`} article={props} className='article-title'>{props.title}</Link>    
            <p>Topic: {props.topic}</p>
            <Link to={`/articles-by-author/${props.author}`}>Author: {props.author}</Link>
            <p>{props.created_at}</p>
            <p>comments: {props.comment_count}</p>
            <LikeCount id={props.article_id} votes={props.votes}/>
        </section>
    );
};

export default ArticlesCard;
