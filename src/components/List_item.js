import React, { Component } from 'react'

export default function List_item({ songImg, userImg, title, genre }) {

   return (
      <div className="list-item">
         <div className="song-image" style={{ backgroundImage: `url(${songImg})` }}></div>
         <div className="song-details">
            <img src={userImg} alt="user-avatar" className="user-image" />
            <a href="#">{title}</a>
            <a href="#" className="user-name">{genre}</a>
         </div>
      </div>
   )
}