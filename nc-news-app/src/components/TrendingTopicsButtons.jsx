import React from 'react';

const TrendingTopics = () => {
    return (
        <div className='trending-topic-container'>
            <p className='trending-topic-title'>Todays Trending Topics</p>
            <button className='trending-topic-button' >Football</button>
            <button className='trending-topic-button'>Cooking</button>
            <button className='trending-topic-button'>Coding</button>
        </div>
    );
};

export default TrendingTopics;