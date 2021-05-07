import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This component should produce some HTML
const App = () => {
  return <div>App</div>;
};

//Take this component's generated HTML and put it on the page (DOM)
//App - component class
//<App /> - component instance
//ReactDOM.render(componentInstance or JSX elements,DOM element where the JSX should be rendered)

ReactDOM.render(<div>App</div>, document.querySelector('.container'));
