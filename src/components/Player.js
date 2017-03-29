import React, { Component } from 'react';

export default class Player extends Component {
   constructor(props) {
      super(props);
      this.tick = this.tick.bind(this);
      this.state = {
         playIconClass: 'ion-play',
         volumeIconClass: 'ion-volume-medium',
         loopIconClass: 'ion-loop',
         duration: 0,
         currentTime: 0
      }
   }
   render() {
      let { streamUrl, songImg, title, genre, resetPlayButton } = this.props;
      let { currentTime, duration } = this.state;
      let url = streamUrl + '?client_id=340f063c670272fac27cfa67bffcafc4';
      let playButton = this.refs.audio;
      return (
         <div className="player">
            <audio src={url} ref="audio"></audio>
            <div className="player-container">
               <div className="player-song-info">
                  <img src={songImg} className="player-song-img"></img>
                  <div className="player-song-description">
                     <p className="player-song-title">{title}</p>
                     <p className="player-song-title">{genre}</p>
                  </div>
               </div>
               <div className="player-control" style={{ transition: 'all .5s' }}>

                  {/*-------managing PREVIOUS SONG play-------*/}
                  <i className="ion-ios-rewind" />


                  {/*-------managing PLAY and PAUSE----------*/}
                  <i className={this.state.playIconClass} onClick={() => {
                     if (playButton.paused) {
                        playButton.play();
                        this.setState({
                           playIconClass: 'ion-pause active',
                           duration: playButton.duration,
                           currentTime: playButton.currentTime
                        })
                     } else {
                        playButton.pause();
                        this.setState({
                           playIconClass: 'ion-play'
                        })
                     }
                  }} />

                  {/*-------managing NEXT SONG play-------*/}
                  <i className="ion-ios-fastforward" />


                  {/*--------managing song LOOPING---------------*/}
                  <i className={this.state.loopIconClass} onClick={() => {

                     if (!playButton.loop) {
                        playButton.loop = true;
                        this.setState({
                           loopIconClass: 'ion-loop active'
                        })
                     } else {
                        playButton.loop = false;
                        this.setState({
                           loopIconClass: 'ion-loop'
                        })
                     }
                  }} />


                  {/*--------managing the VOLUME----------*/}
                  <i className={this.state.volumeIconClass} onClick={() => {
                     if (playButton.volume !== 0) {
                        playButton.volume = 0
                        this.setState({
                           volumeIconClass: 'ion-volume-mute active'
                        })
                     } else {
                        playButton.volume = 1;
                        this.setState({
                           volumeIconClass: 'ion-volume-medium'
                        })
                     }
                  }} />
               </div>
               <div className="player-seek-bar"></div>
               <div className="player-time">
                  {parseInt(currentTime / 60)}:{parseInt(((currentTime / 60) - parseInt(currentTime / 60)) * 60)}
                  /
{parseInt(duration / 60)}:{parseInt(((duration / 60) - parseInt(duration / 60)) * 60)}
               </div>
            </div>
         </div>
      )
   }
   // updating TRACK TIMER
   componentDidMount() {
      this.timerId = setInterval(
         () => this.tick(),
         1000
      )
   }
   componentWillUnmount() {
      clearInterval(this.timerId)
   }
   tick() {
      let playButton = this.refs.audio;
      this.setState({
         currentTime: playButton.currentTime,
         duration: playButton.duration
      })
      if (this.state.currentTime == this.state.duration) {
         this.setState({
            playIconClass: 'ion-play'
         })
      }
   }
}