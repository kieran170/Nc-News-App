import React from 'react';

const DeleteComment = (props) => {
    return (
        <div>
            <button onClick={(event)=>{props.handleDelete(event, props.comment_id)}} >Delete</button>
        </div>
    );
};

export default DeleteComment;
