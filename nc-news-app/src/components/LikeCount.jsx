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
            <div>
                <p>Votes: {votes + voteChange}</p>
                <button disabled={voteChange === 1} onClick={() => {this.handleLikeClick(1)}}>👍 </button>
                <button disabled={voteChange === -1} onClick={() => {this.handleLikeClick(-1)}}>👎 </button>
            </div>
        );
    }

    handleLikeClick = (voteDiff) => {
        const {id, name} = this.props
        this.setState((currentState) => {
            return {voteChange: currentState.voteChange + voteDiff}
        })
        if(name) {
            api.updateCommentVote(voteDiff, id).catch(console.log)
        } else {
            api.updateVote(voteDiff, id).catch(console.log)
        }
        
    }
}

export default LinkCount;


