import React, { Component } from 'react';
import * as api from '../api'

class AddComment extends Component {

    state = {
        newComment : '',
        failedRegex: false
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit} id='commentForm'>
            <h2 className='post-comment-title' >Post A Comment</h2>
            <textarea rows='4' cols='43' name='comment' form='commentForm' placeholder='Add comment here' value={this.state.newComment} onChange={this.handleChange}></textarea>
            <button className='post-comment-button'>Submit Comment</button>
            {this.state.failedRegex === true && this.state.newComment === '' ? <p>Please add text</p> : null}
        </form>
        );
    }
    handleChange = (event) => {
        this.setState({newComment: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const regex = /.+/
        const article_id = this.props.article_id
        const comment = this.state.newComment
        if(regex.test(comment)){
            api.postComment(article_id, comment).then(() => {
                this.setState({newComment: '', failedRegex: false})
            })
        } else {
            this.setState({failedRegex: true})
        }
        
    }
}

export default AddComment;