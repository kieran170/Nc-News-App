import React, { Component } from 'react';

class DeleteComment extends Component {
    state = {
        deleted : false
    }
    render() {
        return (
            <div>
                {this.state.deleted === false &&<button onClick={()=>{
                    this.props.handleDelete( this.props.comment_id)
                    this.setState({deleted :true})}}>Delete</button>}
            </div>
        );
    }
}

export default DeleteComment;
