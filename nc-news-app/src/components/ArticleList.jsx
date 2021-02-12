import React, { Component } from 'react';
import FilterButtons from './FilterButtons'
import ArticlesCard from './ArticlesCard'
import TrendingTopicsButtons from './TrendingTopicsButtons'
import * as api from '../api'
import ErrorDisplayer from './ErrorDisplayer';
import Loader from './Loader';
import HottestArticle from './HottestArticle';

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
            return <Loader />
        }
        if(errMessage) {return <ErrorDisplayer msg={errMessage} />}
        return (
            <>  <TrendingTopicsButtons handleTopicClick={this.handleTopicClick}/>
                <HottestArticle articles={this.state.articles}/>
                {this.props.path === '/' ? <FilterButtons handleOrderClick={this.handleOrderClick}/> : null}
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
    handleTopic = (topic) => {
        api.getArticlesByTopic(topic).then((articles) => {
            this.setState({articles, isLoading: false})
        }).catch(({response:{data:{msg}}}) => {
            this.setState({errMessage: msg, isLoading: false})
        })
    }
}

export default ArticleList;