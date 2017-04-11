import React, { Component } from 'react'
import Upper_nav from './Upper_nav'
import Lower_nav from './Lower_nav'

export default function Nav_bar_container(props) {
   return (
      <div className="nav-container">
         <Upper_nav searchHandler={props.searchHandler} />
         <Lower_nav qParamHandler={props.qParamHandler} />
      </div>
   )
}


