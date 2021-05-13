import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// const API_KEY = 'AIzaSyA86_SPWy-WA-G3YoJ6fdb6_5g6o_h-3Ac';

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('Dhanush');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos }); //this.setState({ videos: videos });
      this.setState({ selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300); // called once in 300ms
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (DOM)
//App - component class
//<App /> - component instance
//ReactDOM.render(componentInstance or JSX elements,DOM element where the JSX should be rendered)

ReactDOM.render(<App />, document.querySelector('.container'));
