import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import PostsReducer from './reducers/index';
import App from './components/app';

// Ian Hou helped me with this bc I forgot to git pull starter and had to do the step twice
// and deleted some of the code. He helped me figure out what was missing/what I deleted.
const store = createStore(PostsReducer, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('main'),
);
