import React, { Component } from 'react';

class DeleteComment extends Component {
    state = {
        deleted : false
    }
    render() {
        return (
            <div>
                {this.state.deleted === false ?<button onClick={(event)=>{
                    this.props.handleDelete(event, this.props.comment_id)
                    this.setState({deleted :true})}}>Delete</button> : null}
            </div>
        );
    }
}

export default DeleteComment;
