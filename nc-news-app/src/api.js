import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export const getAllArticles = (query) => {
  if (query === "comment_count_desc") {
    return axios
      .get(
        "https://kieran-nc-news-app.herokuapp.com/api/articles?sort_by=comment_count"
      )
      .then(({ data }) => {
        return data.articles;
      });
  }
  if (query === "comment_count") {
    return axios
      .get(
        "https://kieran-nc-news-app.herokuapp.com/api/articles?sort_by=comment_count"
      )
      .then(({ data }) => {
        return data.articles.reverse();
      });
  }
  if (query === "votes_desc") {
    return axios
      .get(
        "https://kieran-nc-news-app.herokuapp.com/api/articles?sort_by=votes"
      )
      .then(({ data }) => {
        return data.articles.reverse();
      });
  }
  if (query === "votes") {
    return axios
      .get(
        "https://kieran-nc-news-app.herokuapp.com/api/articles?sort_by=votes"
      )
      .then(({ data }) => {
        return data.articles;
      });
  }
  return axios
    .get("https://kieran-nc-news-app.herokuapp.com/api/articles", {
      params: { order: query },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const updateVote = (value, id,) => {
  return axios.patch(
    `https://kieran-nc-news-app.herokuapp.com/api/articles/${id}`,
    { inc_votes: value}
    );
}

export const updateCommentVote = (value, id,) => {
    return axios.patch(`https://kieran-nc-news-app.herokuapp.com/api/comments/${id}`, {inc_votes: value})
  };

export const getArticlesByTopic = (topic) => {
  if (topic === "homepage") {
    return axios
      .get("https://kieran-nc-news-app.herokuapp.com/api/articles")
      .then(({ data }) => {
        return data.articles;
      });
  }
  return axios
    .get(`https://kieran-nc-news-app.herokuapp.com/api/articles?topic=${topic}`)
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://kieran-nc-news-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

export const getArticleComments = (article_id) => {
  return axios
    .get(
      `https://kieran-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

export const getArticlesByAuthor = (author) => {
  return axios
    .get(
      `https://kieran-nc-news-app.herokuapp.com/api/articles?author=${author}`
    )
    .then(({ data }) => {
      return data.articles;
    });
};

export const postComment = (article_id, comment) => {
  return axios.post(`https://kieran-nc-news-app.herokuapp.com/api/articles/${article_id}/comments`, {username: 'jessjelly', body: comment}).then(({data})=> {
    return data.comment;
  })
}

export const deleteComment = (comment_id) => {
  return axios.delete(`https://kieran-nc-news-app.herokuapp.com/api/comments/${comment_id}`)
}
