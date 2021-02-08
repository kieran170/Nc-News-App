import React from 'react';

const Buttons = () => {
    return (
        <nav className='buttons-container'>
            <button  className='filter-buttons'>Oldest Article</button>
            <button  className='filter-buttons'>Newest Article</button>
            <button  className='filter-buttons'>Most Popular</button>
            <button  className='filter-buttons'>Least Popular</button>
        </nav>
    );
};

export default Buttons;