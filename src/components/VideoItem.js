import './VideoItem.css';
import React from 'react';

/* de-structuring props, video and onVideoSelect.
   The props, onVideoSelect will pass user-clicked video to VideoList.js component.
   And finally will be passed to App.js component */
const VideoItem = ( {video, onVideoSelect} ) => {

    /* There are three main event handler:
      1) onChange, 2) onClick 3) onSubmit */
    return (
        <div onClick={ () => onVideoSelect(video) } className="video-item item">
            <img 
                className="ui image"
                alt={video.snippet.title} 
                src={video.snippet.thumbnails.medium.url} 
            />
            <div className="content"> 
                <div className="header"> {video.snippet.title} </div>
            </div>
        </div>
    );
};

/*
const VideoItem = (props) => {
    return <div><img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.default.url} /></div>;
};
*/
export default VideoItem;