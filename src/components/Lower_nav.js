import React, { Component } from 'react'

export default class Lower_nav extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: [false, false, false, false, false, false, false]
      }
   }
   clickHandler(e, id) {
      let active = this.state.active
      active = active.map(val=> false);
      active[id] = !active[id];
      console.log(e.target.innerHTML);
      this.props.qParamHandler(e.target.innerHTML);
      this.setState({active})
   }
   render() {
      let listArray = ['Chill', 'Deep', 'Dubstep', 'House', 'Progressive', 'Tech', 'Trance']
      .map((val, index) => <li className={`lower-nav-li ${this.state.active[index] ? 'li-active' : ''}`}
         onClick={(e) => this.clickHandler(e,index)} key={val}>{val}</li>)

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