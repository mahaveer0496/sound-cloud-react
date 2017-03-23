import React, { Component } from 'react'

export default function List_item(props) {
   return (
      <div className="list-item">
         <div className="song-image"></div>
         <div className="song-details">
            <img src="https://i1.sndcdn.com/avatars-000128151894-lt86u8-large.jpg" alt="user-avatar" className="user-image" />
            <a>Marin Garrix Trend Setter</a>

            <a href="#" className="user-name">iamdubstep</a>
         </div>
      </div>
   )
}