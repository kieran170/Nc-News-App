import React, { Component } from 'react';
import * as api from '../api'

class AddComment extends Component {

    state = {
        newComment : '',
        failedRegex: false
    }

    render() {
        const {article_id} = this.props
        const {newComment} = this.state
        return (
        <form onSubmit={(event)=>{
            this.props.handleSubmit(event, newComment, article_id)
            this.setState({newComment: ''})
            }} id='commentForm'>
            <h2 className='post-comment-title' >Post A Comment</h2>
            {this.state.failedRegex === true && newComment === '' ? <p className='failed-regex-text'>Please add text</p> : null}
            <textarea className='comment-box' rows='4' cols='43' name='comment' form='commentForm' placeholder='Add comment here' value={newComment} onBlur={this.handleBlur} onChange={this.handleChange}></textarea>
            <button className='post-comment-button'>Submit Comment</button>
        </form>
        );
    }
    handleChange = (event) => {
        const regex = /.+/
        const comment = this.state.newComment
        if(!regex.test(comment)){
            this.setState({failedRegex: true})
        }
        this.setState({newComment: event.target.value, failedRegex:false})
    }
    handleBlur = () => {
        if(!this.state.newComment) {
            this.setState({failedRegex: true})
        }
    }
}

export default AddComment;