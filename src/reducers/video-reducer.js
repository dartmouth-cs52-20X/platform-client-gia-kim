import { ActionTypes } from '../actions';

const initialState = {
  selected: null,
  list: [],
};

const VideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_VIDEO:
      return { selected: action.payload, list: state.list };
    case ActionTypes.SET_VIDEOS:
        return { selected: action.payload[0], list: action.payload };
    default:
      return state;
  }
};

export default VideoReducer;
