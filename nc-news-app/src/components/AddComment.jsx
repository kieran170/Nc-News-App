import React, { Component } from 'react';
import * as api from '../api'

class AddComment extends Component {

    state = {
        newComment : '',
        failedRegex: false
    }

    render() {
        const {article_id} =this.props
        return (
        <form onSubmit={(event)=>{
            this.props.handleSubmit(event, this.state.newComment, article_id)
            this.setState({newComment: ''})
            }} id='commentForm'>
            <h2 className='post-comment-title' >Post A Comment</h2>
            <textarea className='comment-box' rows='4' cols='43' name='comment' form='commentForm' placeholder='Add comment here' value={this.state.newComment} onChange={this.handleChange}></textarea>
            <button className='post-comment-button'>Submit Comment</button>
            {this.state.failedRegex === true && this.state.newComment === '' ? <p>Please add text</p> : null}
        </form>
        );
    }
    handleChange = (event) => {
        const regex = /.+/
        const comment = this.state.newComment
        if(!regex.test(comment)){
            this.setState({failedRegex: true})
        }
        this.setState({newComment: event.target.value, failedRegex:true})
    }
}

export default AddComment;