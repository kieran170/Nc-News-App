import React from 'react';

const FilterButtons = ({handleOrderClick}) => {
    return (
        <div className='buttons-container'>
            <button id='desc' onClick={handleOrderClick} className='filter-buttons'>Newest Article</button>
            <button id='comment_count_desc' onClick={handleOrderClick} className='filter-buttons'>Most comments</button>
            <button id='votes' onClick={handleOrderClick} className='filter-buttons'>Most Votes</button>
            <button id='asc' onClick={handleOrderClick} className='filter-buttons'>Oldest Article</button>
            <button id='comment_count' onClick={handleOrderClick} className='filter-buttons'>Least Comments</button>
            <button id='votes_desc' onClick={handleOrderClick} className='filter-buttons'>Least Votes</button>
        </div>
    );
};

export default FilterButtons;