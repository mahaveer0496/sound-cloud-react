import React, { Component } from 'react'

export default class Nav_bar extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <a className="navbar-brand" href="#">React</a>
            <ul className="nav navbar-nav">
               <li className="active">
                  <a href="#">Home</a>
               </li>
               <li>
                  <a href="#">Link</a>
               </li>
            </ul>
         </nav>
      )
   }
}

