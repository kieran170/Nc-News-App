import React from 'react';
import {Link} from '@reach/router'

const TrendingTopics = () => {
    return (
    <>
        <div className='trending-topic-container'>
            <h2 className='trending-topic-title'>Todays Trending Topics</h2>
        </div>
        <div className='topics-buttons'>
            <Link to={'/coding/articles'} id='coding'  className='trending-topic-button'>Coding</Link>
            <Link to={'/cooking/articles'} id='cooking'  className='trending-topic-button'>Cooking</Link>
            <Link to={'/football/articles'} id='football'  className='trending-topic-button' >Football</Link>
        </div>
    </>
    );
};

export default TrendingTopics;