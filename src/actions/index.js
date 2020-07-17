// keys for actiontypes
export const ActionTypes = {
  SELECT_VIDEO: 'SELECT_VIDEO',
  SET_VIDEOS: 'SET_VIDEOS',
  };


  export function selectVideo(video) {
    return {
      type: ActionTypes.SELECT_VIDEO,
      payload: video,
    };
  }

  export function setVideos(videos) {
    return {
      type: ActionTypes.SET_VIDEOS,
      payload: videos,
    };
  }
