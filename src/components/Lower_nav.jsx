import React, { Component } from 'react'

export default class Lower_nav extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: [false, false, false, false, false, false, false]
      }
   }
   clickHandler(event, id) {
      let { active } = this.state
      active = active.map(val => false);
      active[id] = !active[id];
      this.props.qParamHandler(event.target.innerHTML);
      this.setState({ active });
      global.GLOBAL_INDEX = null;
   }
   render() {
      let listArray = ['Chill', 'Deep', 'Dubstep', 'House', 'Progressive', 'Tech', 'Trance'].
         map((val, index) =>
            <li className=
               {
                  `lower-nav-li ${this.state.active[index]
                     ? 'li-active'
                     : ''}`
               }
               onClick={event => this.clickHandler(event, index)} key={val}>
               {val}
            </li>
         )
      return (
         <div className="lower-nav-container">
            <nav className="lower-nav">
               <ul className="lower-nav-ul">
                  {listArray}
               </ul>
            </nav>
         </div>

      )
   }
}
