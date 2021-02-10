import React, { Component } from 'react';
import * as api from '../api'

class DeleteComment extends Component {
    render() {
        return (
            <div>
               <button onClick={this.handleClick} >Delete</button> 
            </div>
        );
    }
    handleClick = (event) => {
        event.preventDefault()
        api.deleteComment(this.props.comment_id)

    }
}

export default DeleteComment;
