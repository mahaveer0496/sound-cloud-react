import React, { Component } from 'react'
import Upper_nav from './Upper_nav'
import Lower_nav from './Lower_nav'

export default class Nav_bar_container extends Component {   
   render() {
      return (
         <div className="nav-container">
            <Upper_nav searchHandler={this.props.searchHandler}/>
            <Lower_nav qParamHandler={this.props.qParamHandler}/>
         </div>
      )
   }
}

