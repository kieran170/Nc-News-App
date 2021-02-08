import React from 'react';

const LikeCount = ({handleLikeClick, location}) => {
    return (
        <button onClick={(event) => {handleLikeClick(event, location)}}>&#128077;</button>
    );
};

export default LikeCount;