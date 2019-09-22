import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onVideoSelect = (video) => {
        //console.log('From the App component: ', video);
        this.setState({ selectedVideo: video });
    }

    componentDidMount() {
        this.onSearchSubmit('worldwide best tour places');
    }

    componentDidUpdate() {
        if (this.state.selectedVideo !== null) {
            //console.log(this.state.selectedVideo.snippet.title);
            //console.log(this.state.selectedVideo);
        }
            
    }

    onSearchSubmit = async (term) => {

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0] 
        });
        //console.log('API response: ', response.data.items);
        //console.log(term);
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <SearchBar passingFromChildToParent={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        {/* total span is 16: each has 11(left column) and 5(right column) */}
                        <div className="eleven wide column">
                            <VideoDetail oneVideo={this.state.selectedVideo} />
                        </div>    
                        <div className="five wide column">
                            {/*
                            <h3>Search Result has {this.state.videos.length} videos.</h3> */}
                            {/* The props, passingFromListToApp will be used to pass 
                                the user-selected video to the parent component, App */}
                            <VideoList 
                                passingFromListToApp={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>    
                    </div>
                </div>        
            </div>
        );
    }
}

export default App;