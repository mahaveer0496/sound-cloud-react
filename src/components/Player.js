import React, { Component } from 'react';

export default class Player extends Component {
   constructor(props) {
      super(props);
      this.playSound = this.playSound.bind(this)
   }
   playSound() {
      let playButton = this.refs.audio;
      console.log(playButton);
      
      playButton.play();
   }
   render() {
      let url = this.props.streamUrl+ '?client_id=340f063c670272fac27cfa67bffcafc4'
      return (
         <div className="player">
            <audio src={url} ref="audio"></audio>
            <div className="player-container">
               <div className="player-song-info">
                  <img src="https://i1.sndcdn.com/artworks-000008483739-3ypys9-large.jpg" className="player-song-img"></img>
                  <div className="player-song-description">
                     <p className="player-song-title">This is a Song with a big title</p>
                     <p className="player-song-title">This is a Song title</p>
                  </div>
               </div>
               <div className="player-control">
                  <i className="ion-ios-rewind" />
                  <i className="ion-play" onClick={this.playSound} />
                  <i className="ion-ios-fastforward" />
                  <i className="ion-loop" />
                  <i className="ion-shuffle" />
                  <i className="ion-volume-medium" />
               </div>
               <div className="player-seek-bar"></div>
               <div className="player-time">3:20/2:00</div>
            </div>
         </div>
      )
   }
}