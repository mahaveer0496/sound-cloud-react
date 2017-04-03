import React, { Component } from 'react';
import List_item from './List_item';


export default class List_items extends Component {
   constructor(props) {
      super(props);
      // this.trackUrlHandler = this.trackUrlHandler.bind(this);
      // this.state = {
      //    urlOfNextTrack: '',
      //    urlOfPreviousTrack: ''
      // }
   }
//    trackUrlHandler(indexOfTrack) {
//       let { tracks } = this.props

//       if (indexOfTrack <= tracks.length || indexOfTrack >= 0) {
//          let indexOfNextTrack = indexOfTrack + 1;
//          let indexOfPreviousTrack = indexOfTrack - 1;
//          let urlOfNextTrack = tracks[indexOfNextTrack].stream_url;
//          let urlOfPreviousTrack = tracks[indexOfPreviousTrack].stream_url;
//          this.setState({
//             urlOfNextTrack,
//             urlOfPreviousTrack
//          }, () => {
//             // console.log(`trackUrlHandler clicked-${indexOfTrack}- ${indexOfNextTrack} - ${indexOfPreviousTrack}`);
//             // console.log(`URL of next Track - ${this.state.urlOfNextTrack} \nURL of previous track - ${this.state.urlOfPreviousTrack}`);
//          })
//       }

//    }
   render() {
      return (
         <div className="songs-container">
            <div className="list-container">
               {this.props.tracks.map((track, index) => {

                  return (
                     <List_item
                        key={track.id}
                        indexOfTrack={index}
                        title={track.title}
                        genre={track.genre}
                        songImg={track.artwork_url ? track.artwork_url.replace('large', 't300x300') : track.artwork_url}
                        userImg={track.user.avatar_url}
                        streamUrl={track.stream_url}

                        onClickHandler={this.props.onClickHandler} />
                  )
               }
               )}
            </div>

         </div>
      )
   }
}

// .replace('large', 't300x300')
// trackUrlHandler={this.trackUrlHandler}
// urlOfNextTrack={this.state.urlOfNextTrack}
// urlOfPreviousTrack={this.state.urlOfPreviousTrack}