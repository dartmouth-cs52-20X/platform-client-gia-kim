import { ActionTypes } from '../actions/index';
// only need to respond to 2 ActionTypes: FETCH_POST, and FETCH_POSTS.

const initialState = {
  all: [],
  current: {},
};

// For FETCH_POSTS you would return the state object with the all property set to the new posts.
// For FETCH_POST return that single post.
const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload };
    case ActionTypes.FETCH_POST:
        return { current: action.payload };
    default:
      return state;
  }
};

export default PostsReducer;
