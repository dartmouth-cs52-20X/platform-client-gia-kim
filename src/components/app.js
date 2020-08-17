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
import PrivateRoute from './privateRoute';
import SignIn from './signin';
import SignUp from './signup';

const App = () => {
  return (
    <Router>
      <div>
        <FilterBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <PrivateRoute path="/posts/new" component={NewPost} />
          {/* <Route path="/posts/new" component={NewPost} /> */}
          <Route path="/posts/:postID" component={Post} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
