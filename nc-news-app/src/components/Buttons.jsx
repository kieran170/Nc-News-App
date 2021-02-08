import React from 'react';

const Buttons = ({handleOrderClick}) => {
    return (
        <div className='buttons-container'>
            <button id='asc' onClick={handleOrderClick} className='filter-buttons'>Oldest Article</button>
            <button id='desc' onClick={handleOrderClick} className='filter-buttons'>Newest Article</button>
            <button id='votes_desc' onClick={handleOrderClick} className='filter-buttons'>Least Popular</button>
            <button id='votes' onClick={handleOrderClick} className='filter-buttons'>Most Popular</button>
            <button id='comment_count' onClick={handleOrderClick} className='filter-buttons'>Least Comments</button>
            <button id='comment_count_desc' onClick={handleOrderClick} className='filter-buttons'>Most comments</button>
        </div>
    );
};

export default Buttons;