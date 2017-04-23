import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as SC from 'soundcloud';


// COMPONENTS-------------------
import Nav_bar_container from './components/Nav_bar_container';
import List_items from './components/List_items';
import Player from './components/Player';
import Spinner from './components/Spinner';

let GLOBAL_INDEX = 12;
class App extends Component {
   constructor(props) {
      super(props);
      this.searchHandler = this.searchHandler.bind(this);
      this.qParamHandler = this.qParamHandler.bind(this);
      this.clickHandler = this.clickHandler.bind(this);
      this.trackPlayHandler = this.trackPlayHandler.bind(this);
      this.currentTrackInfo = this.currentTrackInfo.bind(this);
      this.state = {
         tracks: [],
         streamUrl: '',
         next_href: '',
         songImg: '',
         title: '',
         genre: '',
         indexOfTrack: 0,
         urlOfNextTrack: '',
         urlOfPreviousTrack: '',
         showPlayer: false,
         showListItems: false,
         showSpinner: true,
         playTrack: false,
         qParam: 'original',
         newTrack: ''
      }
   }
   currentTrackInfo(trackInfoObject) {
      this.setState({
         newTrack: this.state.tracks[trackInfoObject.indexOfTrack]
      }, () => {
         // console.log(`${this.state.newTrack.title}`);
         console.log(`${GLOBAL_INDEX}`);

      })
   }
   render() {
      let { tracks, streamUrl, title, genre, songImg, indexOfTrack, showListItems, showPlayer, showSpinner, playTrack, newTrack } = this.state
      return (
         <div ref="appContainer" className="app-container">
            <Nav_bar_container qParamHandler={this.qParamHandler} searchHandler={this.searchHandler} />
            {showSpinner && <Spinner />}

            {showListItems &&
               <List_items
                  tracks={tracks}
                  onClickHandler={this.clickHandler}
                  playTrack={playTrack}
                  trackPlayHandler={this.trackPlayHandler}
                  currentTrackInfo={this.currentTrackInfo}
               />
            }

            {showPlayer &&
               <Player
                  trackPlayHandler={this.trackPlayHandler}
                  playTrack={playTrack}
                  streamUrl={streamUrl}
                  title={title}
                  genre={genre}
                  songImg={songImg}
                  indexOfTrack={indexOfTrack}
                  currentTrackInfo={this.currentTrackInfo}
                  newTrack={newTrack}
                  GLOBAL_INDEX={GLOBAL_INDEX}
               />
            }
         </div>
      )
   }
   trackPlayHandler() {
      this.setState({
         playTrack: !this.state.playTrack
      }, () => {
         // console.log(`current state changed ${this.state.playTrack}`);
      })
   }
   componentDidMount() {
      SC.initialize({
         client_id: '340f063c670272fac27cfa67bffcafc4'
      });
      SC.get('/tracks', {
         q: this.state.qParam, limit: 200, offset: 0, linked_partitioning: 1
      }).then(data => {
         // console.log(`${JSON.stringify(data)}`);
         this.setState({
            tracks: data.collection,
            next_href: data.next_href,
            showListItems: true,
            showSpinner: false
         })
      });
   }
   qParamHandler(qParam) {
      this.setState({
         showListItems: false,
         showSpinner: true
      })
      SC.get('/tracks', {
         q: qParam, limit: 200, linked_partitioning: 1
      }).then(data => {
         this.setState({
            tracks: data.collection,
            next_href: data.next_href,
            showListItems: true,
            showSpinner: false
         })
      });
   }
   searchHandler(searchTerm) {
      this.setState({
         showListItems: false,
         showSpinner: true
      })
      SC.get('/tracks', {
         q: searchTerm, limit: 200, linked_partitioning: 1
      }).then(data => {
         this.setState({
            tracks: data.collection,
            next_href: data.next_href,
            showSpinner: false,
            showListItems: true
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
      }, () => {
         // console.log(this.state.tracks[this.state.indexOfTrack].title);
      })
   }
}

ReactDOM.render(<App />, document.querySelector('.app'));