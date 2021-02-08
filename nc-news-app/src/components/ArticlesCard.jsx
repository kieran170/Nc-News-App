import React from 'react';

const ArticlesCard = ({title, body, author, created_at, topic, votes}) => {
    return (
        <section className='article-card'>
            <p>{title}</p>
            <p>{topic}</p>
            <p>{body}</p>
            <p>{author}</p>
            <p>{created_at}</p>
            <p>{votes}</p>
            <p>{title}</p>
        </section>
    );
};

export default ArticlesCard;
