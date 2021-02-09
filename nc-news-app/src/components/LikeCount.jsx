import React from 'react';

const LikeCount = ({handleLikeClick, location}) => {
    return (
        <>
            <button id='add' onClick={(event) => {handleLikeClick(event, location)}}>👍 </button>
            <button id='down' onClick={(event) => {handleLikeClick(event, location)}}>👎 </button>
        </>
    );
};

export default LikeCount;

