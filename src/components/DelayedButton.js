import React, { Component } from 'react'

class DelayedButton extends Component {
  //takes two props: onDelayedClick (a function), and delay (a number)

  handleClick = (e) => {
    //console.log(e.type);
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e);
          }, this.props.delay);
  }

  render(){
    return <button onClick={this.handleClick}>Click me!</button>
  }
}

export default DelayedButton
