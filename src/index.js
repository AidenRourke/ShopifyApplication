import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/title';
import Email from './components/email';
import UnSub from './components/un-sub';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">

          <Title />

          <Email />

          <UnSub />

        </div>
      </div>
    );
  }
}
// Take this component generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
