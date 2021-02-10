import React from 'react';
import LikeCount from './LikeCount'
import {Link} from '@reach/router'

const ArticlesCard = (props) => {
    const date = new Date(props.created_at).toString().slice(0, 16)
    return (
        <section className='article-card'>
            <Link to={`/article/${props.article_id}`} article={props} className='article-title'>{props.title}</Link>    
            <p className='article-topic'>Topic: {props.topic}</p>
            <LikeCount id={props.article_id} votes={props.votes}/>
            <Link className='article-author' to={`/articles-by-author/${props.author}`}>Author: {props.author}</Link>
            <p className='article-comments'>comments: {props.comment_count}</p>
            <p className='article-date'>Published : {date}</p>
        </section>
    );
};

export default ArticlesCard;
