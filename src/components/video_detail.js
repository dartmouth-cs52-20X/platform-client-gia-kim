import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (reduxState) => ({
    video: reduxState.video.selected,
});

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    // {videoId} = video.id // is example of destructuring
    const { videoId } = video.id;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div id="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
               <iframe title="unique" className="embed-responsive-item" src={url} />
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, null)(VideoDetail);
