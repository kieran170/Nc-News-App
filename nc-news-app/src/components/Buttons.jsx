import React from 'react';

const Buttons = (props) => {
    return (
        <div className='buttons-container'>
            <button id='oldest' onClick={props.handleClick} className='filter-buttons'>Oldest Article</button>
            <button id='newest' onClick={props.handleClick} className='filter-buttons'>Newest Article</button>
            <button id='most-popular' onClick={props.handleClick} className='filter-buttons'>Most Popular</button>
            <button id='least-popular' onClick={props.handleClick} className='filter-buttons'>Least Popular</button>
        </div>
    );
};

export default Buttons;