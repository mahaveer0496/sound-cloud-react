import React, { Component } from 'react';

export default class Player extends Component {
   constructor(props) {
      super(props);
      this.tick = this.tick.bind(this);
      let { streamUrl, songImg, title, genre } = this.props
      this.state = {
         volumeIconClass: 'ion-volume-medium',
         loopIconClass: 'ion-loop',
         duration: 0,
         currentTime: 0,
         url: `${streamUrl}?client_id=340f063c670272fac27cfa67bffcafc4`,
         songImg,
         title,
         genre
      }
   }
   render() {
      let { trackPlayHandler, playTrack, currentTrackInfo } = this.props,
         { currentTime, duration } = this.state,
         playButton = this.refs.audio;
      return (
         <div className="player">
            <audio src={this.state.url} ref="audio" autoPlay></audio>
            <div className="player-container">
               <div className="player-song-info">
                  <img src={this.state.songImg} className="player-song-img"></img>
                  <div className="player-song-description">
                     <p className="player-song-title">{this.state.title}</p>
                     <p className="player-song-title">{this.state.genre}</p>
                  </div>
               </div>
               <div className="player-control">

                  {/*-------managing PREVIOUS SONG play-------*/}
                  <i className="ion-ios-rewind" onClick={() => {
                     global.GLOBAL_PLAY_ICON = true;
                     global.GLOBAL_INDEX > 0
                        ? global.GLOBAL_INDEX -= 1
                        : global.GLOBAL_INDEX
                     currentTrackInfo();
                  }} />


                  {/*-------managing PLAY and PAUSE----------*/}
                  <i className={
                     playTrack
                        ? 'ion-pause'
                        : 'ion-play'
                  } onClick={() => {
                     if (global.GLOBAL_PLAY_ICON) {
                        global.GLOBAL_PLAY_ICON = false
                     } else {
                        global.GLOBAL_PLAY_ICON = true
                     }
                     trackPlayHandler();
                     if (playButton.paused) {
                        playButton.play().catch(error => console.log(`${error} \n cant figure the cause of this error :(`));
                        this.setState({
                           duration: playButton.duration,
                           currentTime: playButton.currentTime
                        })
                     } else {
                        playButton.pause();
                     }                     
                  }} />

                  {/*-------managing NEXT SONG play-------*/}
                  <i className="ion-ios-fastforward" onClick={() => {
                     global.GLOBAL_PLAY_ICON = true
                     global.GLOBAL_INDEX += 1;
                     currentTrackInfo();
                  }} />


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

               {/*--------------managing SEEK-BAR------------*/}
               <div className="player-seek-bar-div">
                  <input className="player-seek-bar" type="range" value={currentTime} min={0} max={duration} ref="seek_bar" onChange={(event) => {
                     this.setState({
                        currentTime: event.target.value
                     }, () => {
                        playButton.currentTime = currentTime
                     })
                  }} />
               </div>


               {/*--------managing PLAYER-TIMER---------*/}
               <div className="player-time">
                  {parseInt(currentTime / 60)}:{parseInt(((currentTime / 60) - parseInt(currentTime / 60)) * 60)}
                  /
                  {parseInt(duration / 60)}:{parseInt(((duration / 60) - parseInt(duration / 60)) * 60)}
               </div>
            </div>
         </div>
      )
   }
   componentWillReceiveProps(nextProps) {
      let playButton = this.refs.audio;
      if (nextProps.playTrack) {
         playButton.play();
      } else {
         playButton.pause();
      }
      this.setState({
         url: `${nextProps.newTrack.stream_url}?client_id=340f063c670272fac27cfa67bffcafc4`,
         title: nextProps.newTrack.title,
         songImg: nextProps.newTrack.artwork_url
            ? nextProps.newTrack.artwork_url
            : '',
         genre: nextProps.newTrack.genre
      })

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
   }
}
