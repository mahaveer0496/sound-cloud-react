import React, { Component } from 'react'

export default class List_item extends Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
         trackActiveClass: true
      }
   }
   handleClick() {
      let { songImg, streamUrl, onClickHandler, title, genre, indexOfTrack, onClick, trackPlayHandler, currentTrackInfo } = this.props,
         showPlayer = true,
         trackInfoObj = {
            songImg,
            streamUrl,
            title,
            genre,
            indexOfTrack,
            showPlayer
         }
      //from List_item.js
      onClickHandler(trackInfoObj)
      onClick()
      trackPlayHandler();
      currentTrackInfo(trackInfoObj)
   }
   render() {
      let { songImg, userImg, title, genre, selected, trackPlayHandler, playTrack, currentTrackInfo } = this.props;
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
               {selected &&
                  <div className="track-active">
                     <div className={playTrack
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
