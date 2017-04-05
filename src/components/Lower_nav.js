import React, { Component } from 'react'

export default class Lower_nav extends Component {
   constructor(props) {
      super(props);
      this.clickHandler = this.clickHandler.bind(this);
      this.state = {
         li_className : ''
      }
   }
   clickHandler(e) {
      console.log(e.target.innerHTML)
      this.props.qParamHandler(e.target.innerHTML);
      this.setState({
         li_className: 'li-active'
      })
   }
   render() {
      let listArray = ['Chill', 'Deep', 'Dubstep', 'House', 'Progressive', 'Tech', 'Trance'].map(val => <li className={`lower-nav-li ${this.state.li_className}`} onClick={this.clickHandler} key={val}>{val}</li>)

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