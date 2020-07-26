import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.selectVideo(props.video)}>
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </li>
  );
};

export default connect(null, { selectVideo })(VideoListItem);
