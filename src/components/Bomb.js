// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
    debugger
  }

  render(){
    debugger
    const message = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!';
    return (
      <div>{message}</div>
    )
  }
}

export default Bomb;
