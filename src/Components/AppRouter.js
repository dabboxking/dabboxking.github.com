import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './Home.js';
import CV from './CV.js';
import Blog from './Blog.js';

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Home}></Route>
        <Route path="/cv" component={CV}></Route>
        <Route path="/blog" component={Blog}></Route>
      </Router>
    )
  }
}

export default AppRouter;
