import React, {Component} from 'react'

export default class Keypad extends Component{


    text = () => {
        console.log("Entering password...")
    }

    render(){
        return (
            <div>
                <label>Enter Password</label>
                <input onKeyUp={this.text} type="password" />
            </div>
        )
    }
}


