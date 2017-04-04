import React, { Component } from 'react'

export default class Lower_nav extends Component {
   constructor(props) {
      super(props);
      this.clickHandler = this.clickHandler.bind(this)
   }
   clickHandler(e) {
      console.log(e.target.innerHTML)
      this.props.qParamHandler(e.target.innerHTML);
   }
   render() {
      let listArray = ['Chill', 'Deep', 'Dubstep', 'House', 'Progressive', 'Tech', 'Trance'].map(val => <li key={val}><a onClick={this.clickHandler} href="#">{val}</a></li>)

      return (
         <nav className="lower-nav">
            <ul>
               {listArray}
            </ul>
         </nav>

      )
   }
}

{/*<li><a href="#" onClick={this.clickHandler}>Chill</a></li>
   <li><a href="#" onClick={this.clickHandler}>Deep</a></li>
   <li><a href="#" onClick={this.clickHandler}>Dubstep</a></li>
   <li><a href="#" onClick={this.clickHandler}>House</a></li>
   <li><a href="#" onClick={this.clickHandler}>Progressive</a></li>
   <li><a href="#" onClick={this.clickHandler}>Tech</a></li>
   <li><a href="#" onClick={this.clickHandler}>Trance</a></li>*/}