import React, { Component } from 'react'
import List_item from './List_item'

export default class List_items extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div>
            <h1>List items Component</h1>
            <List_item />
         </div>
      )
   }
}