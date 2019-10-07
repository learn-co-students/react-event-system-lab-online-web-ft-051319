
import React, { Component } from 'react';

export default class Keypad extends Component {


  constructor() {
    super()
  }

  handleKey = () => {
    console.log("Entering password...")
  }

render() {
  return (
    <div className="password">

    <input type="password" onKeyUp={this.handleKey} />

    </div>

    )
  }

}
