import React from 'react';
import {Link} from '@reach/router'
import LinkCount from './LikeCount';

const HottestArticle = (props) => {
    const {articles} = props
    const selectedArticle = articles.filter(article => article.article_id === 23)
    const article = selectedArticle[0]
        
    return (
        <div className='hotttest-article-container'>
            <h2 className='hottest-article-header'>Today's Hottest Article</h2>
            <Link to='/article/23' className='hottest-article-title'>Sunday League Football</Link>
            <img className='hottest-article-image' src='https://www.shropshirestar.com/resizer/_r8KthGh2Gbx9tfW-ivPe8T3E4I=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/XQUHO3JAQVC3RMNY2OSRY6FLAE.jpg' alt='sunday-league' />
            <p className='hottest-article-text'>Votes: {article.votes}&#128293;&#128293;&#128293; </p>
            <p className='hottest-article-text'>Author: {article.author}</p>
        </div>
    );
    
};


export default HottestArticle;

