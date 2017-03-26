import React, { Component } from 'react';
import List_item from './List_item';


export default class List_items extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="songs-container">
            <div className="list-container">
               {this.props.tracks.map(track =>
                  <List_item
                     key={track.id}
                     title={track.title}
                     genre={track.genre}
                     songImg={track.artwork_url.replace('large', 't300x300')}
                     userImg={track.user.avatar_url}
                     streamUrl={track.stream_url}
                     onClickHandler={this.props.onClickHandler} />
               )}
            </div>

         </div>
      )
   }
}