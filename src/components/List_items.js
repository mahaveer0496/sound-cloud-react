import React, { Component } from 'react';
import List_item from './List_item';


export default class List_items extends Component {
   constructor(props) {
      super(props);
      this.trackUrlHandler = this.trackUrlHandler.bind(this);
      this.state = {
         urlOfNextTrack: '',
         urlOfPreviousTrack: '',
         selected: null
      }
   }
   selected(track) {
      this.setState({
         selected: track
      })
   }
   trackUrlHandler(indexOfTrack) {
      let { tracks } = this.props;
      if (indexOfTrack <= tracks.length || indexOfTrack >= 0) {
         let indexOfNextTrack = indexOfTrack + 1,
            indexOfPreviousTrack = indexOfTrack - 1,
            urlOfNextTrack = tracks[indexOfNextTrack].stream_url,
            urlOfPreviousTrack = tracks[indexOfPreviousTrack].stream_url;
         this.setState({
            urlOfNextTrack,
            urlOfPreviousTrack
         })
      }

   }
   render() {
      return (
         <div className="songs-container">
            <div className="list-container">
               {this.props.tracks.map((track, index) => (
                  <List_item
                     key={track.id}
                     selected={track === this.state.selected}
                     onClick={() => {
                        this.selected(track)
                     }}
                     indexOfTrack={index}
                     title={track.title}
                     genre={track.genre}
                     songImg={track.artwork_url
                        ? track.artwork_url.replace('large', 't300x300')
                        : track.artwork_url}
                     userImg={track.user.avatar_url}
                     streamUrl={track.stream_url}
                     trackUrlHandler={this.trackUrlHandler}
                     urlOfNextTrack={this.state.urlOfNextTrack}
                     urlOfPreviousTrack={this.state.urlOfPreviousTrack}
                     onClickHandler={this.props.onClickHandler}
                     trackPlayHandler={this.props.trackPlayHandler}
                     playTrack={this.props.playTrack}
                  />
               )
               )}
            </div>
         </div>
      )
   }
}

// .replace('large', 't300x300')