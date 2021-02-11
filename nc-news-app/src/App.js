import "./App.css";
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import ArticleById from './components/ArticleById'
import ArticleByAuthor from './components/ArticleByAuthor'
import ErrorDisplayer from './components/ErrorDisplayer'
import {Router} from '@reach/router'

import React, { Component } from 'react';
import Username from "./components/Username";

class App extends Component {

  state = {
    username: 'jessjelly'
  }

  render() {
    return (
      <div className="App">
      <Username username={this.state.username} login={this.login} logout={this.logout}/>
      <Header />
      <Router>
        <ArticleList path='/'/>
        <ArticleList path='/:topic/articles'/>
        <ArticleById username={this.state.username} path='/article/:article_id'/>
        <ArticleByAuthor path='/articles-by-author/:author' />
        <ErrorDisplayer default/>
      </Router>
    </div>
    );
  }
  logout = () => {
    this.setState({username: ''})
  }
  login = () => {
    this.setState({username: 'jessjelly'})
  }
}

export default App;