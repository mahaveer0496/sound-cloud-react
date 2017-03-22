import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS-------------------
import Nav_bar from './components/Nav_bar'
import List_items from './components/List_items'


class App extends Component {

  render() {
    return (
      <div>
        <Nav_bar />
        <List_items />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
