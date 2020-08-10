import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import NewPost from './newpost';
import Post from './post';
import Posts from './posts';
import FilterBar from './filterbar';

const App = () => {
  return (
    <Router>
      <div>
        <FilterBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
