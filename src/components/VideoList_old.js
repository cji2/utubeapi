import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const videos = props.videos;
    const passingFromListToApp = props.passingFromListToApp;

    const renderedList = videos.map((video) => {
        return (
            {/* The props, passingFromLIstToApp will be used to pass
                user-selected video to App component. */}
            <VideoItem 
                onVideoSelect={passingFromListToApp} 
                key={video.id.videoId} 
                video={video} 
            />
        );
    });

    console.log(videos);

    return <div className="ui relaxed divided list"> {renderedList} </div>;
}

export default VideoList;