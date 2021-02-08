import axios from 'axios';

export const getAllArticles = () => {
    return axios.get('https://kieran-nc-news-app.herokuapp.com/api/articles').then(({data}) => {
        return data.articles
    })
} 