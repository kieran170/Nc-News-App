import "./App.css";
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import ArticleById from './components/ArticleById'
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticleList path='/articles'/>
        <ArticleById path='/article/*'/>
      </Router>
    </div>
  );
}

export default App;
