import "./App.css";
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import ArticleById from './components/ArticleById'
import ArticleByAuthor from './components/ArticleByAuthor'
import ErrorDisplayer from './components/ErrorDisplayer'
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticleList path='/'/>
        <ArticleList path='/:topic/articles'/>
        <ArticleById path='/article/:article_id'/>
        <ArticleByAuthor path='/articles-by-author/:author' />
        <ErrorDisplayer default/>
      </Router>
    </div>
  );
}

export default App;
