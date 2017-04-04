import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as SC from 'soundcloud';


// COMPONENTS-------------------
import Nav_bar_container from './components/Nav_bar_container';
import List_items from './components/List_items';
import Player from './components/Player'


class App extends Component {
   constructor(props) {
      super(props);
      this.searchHandler = this.searchHandler.bind(this);
      this.qParamHandler = this.qParamHandler.bind(this);
      this.clickHandler = this.clickHandler.bind(this);
      this.state = {
         tracks: [],
         streamUrl: '',
         songImg: '',
         title: '',
         genre: '',
         indexOfTrack: 0,
         urlOfNextTrack: '',
         urlOfPreviousTrack: '',
         showPlayer: false,
         qParam: 'original'
      }
   }
   render() {
      let { tracks, streamUrl, title, genre, songImg, indexOfTrack, urlOfNextTrack, urlOfPreviousTrack, showPlayer } = this.state
      return (
         <div ref="appContainer" className="app-container">
            <Nav_bar_container qParamHandler={this.qParamHandler} searchHandler={this.searchHandler} />
            <List_items
               tracks={tracks}
               onClickHandler={this.clickHandler} />
            {showPlayer &&
               <Player
                  streamUrl={streamUrl}
                  title={title}
                  genre={genre}
                  songImg={songImg}
                  indexOfTrack={indexOfTrack}
                  urlOfNextTrack={urlOfNextTrack}
                  urlOfPreviousTrack={urlOfPreviousTrack} />}
         </div>
      )
   }
   qParamHandler(qParam) {
      let appContainer = this.refs.appContainer
      appContainer.style.cursor = 'wait';
      SC.get('/tracks', {
         q: qParam, limit: 10
      }).then(data => {
         this.setState({
            tracks: data,
         }, () => {
            console.log(`state is set cursor not changed wtf`);
            appContainer.style.cursor = 'default';
         })
      });
   }
   searchHandler(searchTerm) {
      let appContainer = this.refs.appContainer
      appContainer.style.cursor = 'wait';
      SC.get('/tracks', {
         q: searchTerm, limit: 10
      }).then(data => {
         this.setState({
            tracks: data,
         }, () => {
            console.log(`state is set cursor not changed wtf`);
            appContainer.style.cursor = 'default';
         })
      });
   }
   clickHandler(trackInfoObject) {
      let { streamUrl, songImg, genre, title, showPlayer, indexOfTrack, urlOfNextTrack, urlOfPreviousTrack } = trackInfoObject
      this.setState({
         streamUrl,
         songImg,
         genre,
         title,
         showPlayer,
         indexOfTrack,
         urlOfNextTrack,
         urlOfPreviousTrack
      })
   }
   componentDidMount() {
      let appContainer = this.refs.appContainer
      appContainer.style.cursor = 'wait';

      SC.initialize({
         client_id: '340f063c670272fac27cfa67bffcafc4'
      });
      SC.get('/tracks', {
         q: this.state.qParam, limit: 20, offset: 0
      }).then(data => {
         this.setState({
            tracks: data
         }, () => {
            console.log(`state is set cursor not changed wtf`);
            appContainer.style.cursor = 'default';

         })
      });
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

