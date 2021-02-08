import axios from 'axios';

export const getAllArticles = (query) => {
    return axios.get('https://kieran-nc-news-app.herokuapp.com/api/articles', {params: {order: query}}).then(({data}) => {
        return data.articles
    })
} 