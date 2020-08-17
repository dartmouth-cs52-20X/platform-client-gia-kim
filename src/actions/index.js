import axios from 'axios';

const ROOT_URL = 'https://giakimlab5.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://platform.cs52.me/api';
// const API_KEY = '';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  FILTER_POST: 'FILTER_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  };

  // trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, username, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, username, password })
    .then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    })
    .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser({ email, username, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, username, password })
    .then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    })
    .catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

export function fetchPosts() { /* axios get */
    return (dispatch) => {
      axios.get(`${ROOT_URL}/posts`)
        .then((response) => {
          dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: ActionTypes.ERROR_SET, error });
        });
    };
}

// With POST and PUT you need to supply an object with key,value data.
  export function createPost(post, history) { /* axios post */
    return (dispatch) => {
      axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: ActionTypes.CREATE_POST, payload: post }).then(history.push('/'));
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
  }

  export function updatePost(id, post, history) { /* axios put */
    return (dispatch) => {
      axios.put(`${ROOT_URL}/posts/${id}`, post, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.UPDATE_POST, payload: post }).then(history.push('/'));
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

  export function fetchPost(id) { /* axios get */
    return (dispatch) => {
      axios.get(`${ROOT_URL}/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
    };
  }

  export function deletePost(id, history) { /* axios delete */
    return (dispatch) => {
      axios.delete(`${ROOT_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data }).then(history.push('/'));
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
   };
}

export function filterPost(filter) {
  return { type: ActionTypes.FILTER_POST, payload: filter };
}
