import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyAFRoRZZYCT0cjDNru8fAuw-QTuSMGdUz0';

//Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//Take this component's generated HTML and put it on the page (DOM)
//App - component class
//<App /> - component instance
//ReactDOM.render(componentInstance or JSX elements,DOM element where the JSX should be rendered)

ReactDOM.render(<App />, document.querySelector('.container'));
