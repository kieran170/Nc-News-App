import axios from "axios";

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

export const postVote = (id, article_id) => {
  if (id === "down") {
    return axios.patch(
      `https://kieran-nc-news-app.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: -1 }
    );
  }
  return axios.patch(
    `https://kieran-nc-news-app.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: 1 }
  );
};
