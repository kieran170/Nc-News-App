import React from 'react';

const ArticlesCard = ({title, body, author, created_at, topic, votes}) => {
    return (
        <section className='article-card'>
            <h3>{title}</h3>
            <p>Topic: {topic}</p>
            <p>{body}</p>
            <p>Author: {author}</p>
            <p>{created_at}</p>
            <p>Votes: {votes}</p>
        </section>
    );
};

export default ArticlesCard;
