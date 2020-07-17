// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import VideoReducer from './video-reducer';

const rootReducer = combineReducers({
  video: VideoReducer,
});

export default rootReducer;
