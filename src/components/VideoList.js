import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, passingFromListToApp }) => {
    /*
    const videos = props.videos;
    const passingFromListToApp = props.passingFromListToApp;
    */
    /* The props, passingFromLIstToApp will be used to pass
       user-selected video to App component. */
    const renderedList = videos.map((video) => {
        return (
            <VideoItem 
                onVideoSelect={passingFromListToApp} 
                key={video.id.videoId} 
                video={video} 
            />
        );
    });

    //console.log(videos);

    return <div className="ui relaxed divided list"> {renderedList} </div>;
}

export default VideoList;