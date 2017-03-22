import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS-------------------
import Nav_bar from './components/Nav_bar'


class App extends Component {

  render() {
    return (
          <Nav_bar />
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
