import React, { Component } from 'react'
//eslint no-unused-vars: 2

export default class List_item extends Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick() {
      let { songImg, streamUrl, onClickHandler, title, genre, indexOfTrack, onClick, trackPlayHandler, currentTrackInfo } = this.props,
         trackInfoObj = {
            songImg,
            streamUrl,
            title,
            genre,
            indexOfTrack,
            showPlayer: true
         };
      if (global.GLOBAL_PLAY_ICON) {
         global.GLOBAL_PLAY_ICON = false
      } else {
         global.GLOBAL_PLAY_ICON = true
      }
      if (global.GLOBAL_INDEX !== indexOfTrack) {
         global.GLOBAL_PLAY_ICON = true
      }
      onClickHandler(trackInfoObj)
      onClick()
      trackPlayHandler();
      currentTrackInfo()
   }
   render() {
      let { songImg, userImg, title, genre, playTrack, indexOfTrack } = this.props;
      return (
         <div onClick={this.handleClick} className="list-item">
            <div className="song-image" style={{
               backgroundImage: `url(${songImg})`,
               width: `${100}%`,
               height: `${70}px`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: `${50}%`
            }}>
               {indexOfTrack === global.GLOBAL_INDEX &&
                  <div className="track-active">
                     <div className={
                        playTrack
                           ? 'ion-pause'
                           : 'ion-play'} >
                     </div>
                  </div>}
            </div>
            <div className="song-details">
               <img src={userImg} alt="user-avatar" className="user-image" />
               <a href="#">{title}</a>
               <a href="#" className="user-name">{genre}</a>
            </div>
         </div >

      )
   }
}
