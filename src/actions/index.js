import axios from 'axios';

const ROOT_URL = 'https://giakimlab5.herokuapp.com';
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
  };

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
      axios.post(`${ROOT_URL}/posts`, post)
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
      axios.put(`${ROOT_URL}/posts/${id}`, post)
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
      axios.delete(`${ROOT_URL}/posts/${id}`)
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
