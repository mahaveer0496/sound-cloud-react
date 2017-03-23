import React, { Component } from 'react'
import List_item from './List_item'

export default class List_items extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="songs-container">
            <div className="list-container">
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            <List_item />
            </div>
         </div>
      )
   }
}