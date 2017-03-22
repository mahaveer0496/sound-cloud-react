import React, { Component } from 'react'

export default class Nav_bar extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="nav-container">
            <nav className="upper-nav">
               <span className="logo">SoundReact</span>
               <form >
                  <input type="text" placeholder="search" />
               </form>
            </nav>
            <nav className="lower-nav">
               <ul>
                  <li><a href="#">Chill</a></li>
                  <li><a href="#">Deep</a></li>
                  <li><a href="#">Dubstep</a></li>
                  <li><a href="#">House</a></li>
                  <li><a href="#">Progressive</a></li>
                  <li><a href="#">Tech</a></li>
                  <li><a href="#">Trance</a></li>
               </ul>
            </nav>

         </div>
      )
   }
}

