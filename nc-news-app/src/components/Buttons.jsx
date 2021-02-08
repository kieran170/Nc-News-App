import React from 'react';

const Buttons = (props) => {
    return (
        <div className='buttons-container'>
            <button id='asc' onClick={props.handleOrderClick} className='filter-buttons'>Oldest Article</button>
            <button id='desc' onClick={props.handleOrderClick} className='filter-buttons'>Newest Article</button>
            <button id='most-popular' onClick={props.handleClick} className='filter-buttons'>Most Popular</button>
            <button id='least-popular' onClick={props.handleClick} className='filter-buttons'>Least Popular</button>
            <button className='filter-buttons'>Most Comments</button>
            <button className='filter-buttons'>Least comments</button>
        </div>
    );
};

export default Buttons;