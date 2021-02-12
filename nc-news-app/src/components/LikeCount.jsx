import React, { Component } from 'react';
import * as api from '../api'

class LinkCount extends Component {

    state = {
        voteChange: 0,
        errMessage: '',
    }


    render() {
        const {votes} = this.props
        const {voteChange, errMessage} = this.state

        return (
            <div className='likes-container'>
                <p className='vote-count'>Votes: {votes + voteChange}</p>
                <button className='like-buttons' disabled={voteChange === 1} onClick={() => {this.handleLikeClick(1)}}>👍 </button>
                <button className='like-buttons' disabled={voteChange === -1} onClick={() => {this.handleLikeClick(-1)}}>👎 </button>
            </div>
        );
    }

    handleLikeClick = (voteDiff) => {
        const {id, name} = this.props
        this.setState((currentState) => {
            return {voteChange: currentState.voteChange + voteDiff}
        })
        if(name) {
            api.updateCommentVote(voteDiff, id).catch(({response:{data:{msg}}}) => {
                this.setState({errMessage: msg})
            })
        } else {
            api.updateVote(voteDiff, id).catch(({response:{data:{msg}}}) => {
                this.setState({errMessage: msg})
            })
        }
        
    }
}

export default LinkCount;


