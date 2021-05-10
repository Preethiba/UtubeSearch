import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyAFRoRZZYCT0cjDNru8fAuw-QTuSMGdUz0';

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'Vijay' }, videos => {
      this.setState({ videos }); //this.setState({ videos: videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (DOM)
//App - component class
//<App /> - component instance
//ReactDOM.render(componentInstance or JSX elements,DOM element where the JSX should be rendered)

ReactDOM.render(<App />, document.querySelector('.container'));
