import { ActionTypes } from '../actions/index';
// only need to respond to 2 ActionTypes: FETCH_POST, and FETCH_POSTS.

const initialState = {
  all: [],
  current: {},
};

// For FETCH_POSTS you would return the state object with the all property set to the new posts.
// For FETCH_POST return that single post.
// if that isn’t there then those keys disappear from the reducer which can cause all sorts of bugs
const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, current: state.current };
    case ActionTypes.FETCH_POST:
        return { current: action.payload, all: state.all };
    default:
      return state;
  }
};

export default PostsReducer;
