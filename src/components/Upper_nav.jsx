import React, { Component } from 'react'

export default class Upper_nav extends Component {
   constructor(props) {
      super(props);
      this.search = this.search.bind(this)
   }
   search(event) {
      event.preventDefault();
      let searchParam = this.refs.searchTerm.value;
      this.props.searchHandler(searchParam);
      global.GLOBAL_INDEX = null;
      this.refs.searchTerm.value = ''
   }
   render() {
      return (
         <nav className="upper-nav">
            <span className="logo">SoundReact</span>
            <form onSubmit={this.search}>
               <input type="text" placeholder="search" ref="searchTerm" />
            </form>
         </nav>
      )
   }
}
