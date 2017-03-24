import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as SC from 'soundcloud';

// COMPONENTS-------------------
import Nav_bar from './components/Nav_bar';
import List_items from './components/List_items';




class App extends Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this)
    this.state = {
      tracks: []
    }

  }

  componentWillMount() {
    SC.initialize({
      client_id: '340f063c670272fac27cfa67bffcafc4'
    });
    SC.get('/tracks/', {
      q: 'hiphop', limit: 10
    }).then((data) => {
      this.setState({
        tracks: data
      })
    });
  }

  searchHandler(searchTerm) {
    console.log(`searchHandler was called`);
    SC.get('/tracks/', {
      q: searchTerm, limit: 10
    }).then((data) => {
      this.setState({
        tracks: data,
      })
    });
  }
  render() {
    return (
      <div>
        <Nav_bar onSearchHandler={this.searchHandler} />
        <List_items tracks={this.state.tracks} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));


// AUTHENTICATE soundcloud
// SC.initialize({
//   client_id: '340f063c670272fac27cfa67bffcafc4',
//   redirect_uri: 'http://external.codecademy.com/soundcloud.html'
// });

// $(document).ready(function() {
//   $('a.connect').click(function(e) {
//     e.preventDefault();
//     SC.connect(function(){
//         SC.get('/me', function(me){
//             $('#username').html(me.username)
//         })    
//     })
//   });
// });