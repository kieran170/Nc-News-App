import React, { Component } from 'react';
import * as api from '../api'
import ArticlesCard from './ArticlesCard'
import ErrorDisplayer from './ErrorDisplayer'
import Loader from './Loader'

class ArticleByAuthor extends Component {

    state={
        articles: [],
        errMessage : '',
        isLoading: true,
    }

    componentDidMount() {
        this.fetchArticlesByAuthor(this.props.author)
    }
    render() {
        const {articles, errMessage} = this.state;
        if(this.state.isLoading === true) {
            return <Loader />
        }
        if(errMessage) {return <ErrorDisplayer msg={errMessage} />}
        return (
            <main>
                {articles.map((article, index) => {
                return <ArticlesCard key={article.article_id} index={index} {...article} />
                    })}
            </main>
        );
    }
    fetchArticlesByAuthor = (author) => {
        api.getArticlesByAuthor(author).then((articles) => {
             this.setState({articles, isLoading: false})
        }).catch(({response:{data:{msg}}}) => {
            this.setState({errMessage: msg, isLoading: false})
        })
    }
}

export default ArticleByAuthor;