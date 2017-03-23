import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as SC from 'soundcloud';

// COMPONENTS-------------------
import Nav_bar from './components/Nav_bar';
import List_items from './components/List_items';

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

// const API_KEY = 'f4323c6f7c0cd73d2d786a2b1cdae80c'

// SC.initialize({
//   client_id: API_KEY
// });

// SC.get('/tracks', {
//   q: 'buskers', license: 'cc-by-sa'
// }).then(function(tracks) {
//   console.log(tracks);
// });

// SC.stream('/tracks/293').then(function(player){
//   player.play();
// });
