import axios from "axios";

const request = axios.create({
  baseURL : 'https://kieran-nc-news-app.herokuapp.com/api'
})

export const getAllArticles = (query) => {
  if (query === "comment_count_desc") {
    return request
      .get(
        "/articles?sort_by=comment_count"
      )
      .then(({ data }) => {
        return data.articles;
      });
  }
  if (query === "comment_count") {
    return request
      .get(
        "/articles?sort_by=comment_count"
      )
      .then(({ data }) => {
        return data.articles.reverse();
      });
  }
  if (query === "votes_desc") {
    return request
      .get(
        "/articles?sort_by=votes"
      )
      .then(({ data }) => {
        return data.articles.reverse();
      });
  }
  if (query === "votes") {
    return request
      .get(
        "/articles?sort_by=votes"
      )
      .then(({ data }) => {
        return data.articles;
      });
  }
  return request
    .get("/articles", {
      params: { order: query },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const updateVote = (value, id,) => {
  return request.patch(
    `/articles/${id}`,
    { inc_votes: value}
    );
}

export const updateCommentVote = (value, id,) => {
    return request.patch(`/comments/${id}`, {inc_votes: value})
  };

export const getArticlesByTopic = (topic) => {
  if (topic === "homepage") {
    return request
      .get("/articles")
      .then(({ data }) => {
        return data.articles;
      });
  }
  return request
    .get(`/articles?topic=${topic}`)
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

export const getArticleComments = (article_id) => {
  return request
    .get(
      `/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

export const getArticlesByAuthor = (author) => {
  return request
    .get(`/articles?author=${author}`)
    .then(({ data }) => {
      return data.articles;
    });
};

export const postComment = (article_id, comment, username) => {
  return request.post(`/articles/${article_id}/comments`, {username: username, body: comment}).then(({data})=> {
    return data.comment;
  })
}

export const deleteComment = (comment_id) => {
  return request.delete(`/comments/${comment_id}`)
}
