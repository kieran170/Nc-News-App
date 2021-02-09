import React, { Component } from 'react';
import FilterButtons from './FilterButtons'
import ArticlesCard from './ArticlesCard'
import TrendingTopicsButtons from './TrendingTopicsButtons'
import * as api from '../api'
import ErrorDisplayer from './ErrorDisplayer';

class ArticleList extends Component {
    state = {
        isLoading: true,
        articles: [],
        errMessage: '',
    }

    componentDidMount = () => {
            const topic = this.props.topic;
            if (topic === undefined) {
              this.fetchArticles()  
            } else {
                this.handleTopic(topic)
            }
    }

    componentDidUpdate(prevProps) {
        const topic = this.props.topic;
        if (topic !== undefined && topic !== prevProps.topic) {
            this.handleTopic(topic)
        }

    }

    render() {
        const {articles, errMessage} = this.state;
        if(this.state.isLoading === true) {
            return <img className='loading' src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47jsvriuti9367kth1dv181fu679bvvaj9ock6ptyl&rid=giphy.gif' alt='loading' />
        }
        if(errMessage) {return <ErrorDisplayer msg={errMessage} />}
        return (
            <>  
                {this.props.path === '/' ? <FilterButtons handleOrderClick={this.handleOrderClick}/> : null}
                <TrendingTopicsButtons handleTopicClick={this.handleTopicClick}/>
                <main className='articles-container'>
                    {articles.map((article, index) => {
                        return <ArticlesCard key={article.article_id} index={index} {...article} handleLikeClick={this.handleLikeClick}/>
                    })}
                </main>
                
            </>
        );
    }
    fetchArticles = () => {
        api.getAllArticles().then((articles) => {
            this.setState({articles, isLoading: false});
        });
    }
    handleOrderClick = (event) => {
        api.getAllArticles(event.target.id).then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }
    handleLikeClick = (event, index) => {
        event.preventDefault()
        const article_id = this.state.articles[index].article_id;
        api.postVote(event.target.id, article_id).then((article) => {
            this.setState((currentState) => {
                const articleUpdatedVotes = currentState.articles[index]
                articleUpdatedVotes.votes = article.data.article.votes
                return currentState;
            })
        })
    }
    handleTopic = (topic) => {
        api.getArticlesByTopic(topic).then((articles) => {
            this.setState({articles, isLoading: false})
        }).catch(({response:{data:{msg}}}) => {
            this.setState({errMessage: msg, isLoading: false})
        })
    }
}

export default ArticleList;