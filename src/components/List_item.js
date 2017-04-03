import React, { Component } from 'react'

export default class List_item extends Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick() {
      console.log(`handleClick was called - ${this.props.streamUrl}`);
      let { songImg, streamUrl, onClickHandler, title, genre, indexOfTrack } = this.props;
      let trackInfoObj = {
         songImg: songImg,
         streamUrl: streamUrl,
         title: title,
         genre: genre,
         indexOfTrack: indexOfTrack,
         showPlayer: true
      }
      onClickHandler(trackInfoObj);
   //    trackUrlHandler(indexOfTrack)
   //    console.log(`${urlOfNextTrack} - ${urlOfPreviousTrack}`);
   }
   render() {
      let { songImg, userImg, title, genre } = this.props;
      return (

         <div onClick={this.handleClick} className="list-item">
            <div className="song-image" style={{
               backgroundImage: `url(${songImg})`,
               width: `${100}%`,
               height: `${70}px`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: `${50}%`

            }}></div>
            <div className="song-details">
               <img src={userImg} alt="user-avatar" className="user-image" />
               <a href="#">{title}</a>
               <a href="#" className="user-name">{genre}</a>
            </div>
         </div >

      )
   }
}