import React, { Component } from 'react';
import List_item from './List_item';


export default class List_items extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selected: null
      }
   }
   selected(track) {
      this.setState({
         selected: track
      })
   }
   render() {
      return (
         <div className="songs-container">
            <div className="list-container">
               {this.props.tracks.map((track, index) =>
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
                     onClickHandler={this.props.onClickHandler}
                     trackPlayHandler={this.props.trackPlayHandler}
                     playTrack={this.props.playTrack}
                     currentTrackInfo={this.props.currentTrackInfo}
                  />
               )}
            </div>
         </div>
      )
   }
}
