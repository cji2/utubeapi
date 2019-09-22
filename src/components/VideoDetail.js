import React from 'react';

/* de-structuring props, onVideoSelect. */
const VideoDetail = ({oneVideo}) => {
    if (!oneVideo)
        return <div>Loading ... </div>;

    const videoSrc = `https://www.youtube.com/embed/${oneVideo.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title={oneVideo.snippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="hi header">
                    {oneVideo.snippet.title}
                </h4>    
                <p>{oneVideo.snippet.description}</p>
            </div>    
        </div>
    );
}

export default  VideoDetail;