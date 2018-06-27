import React from 'react'

class DelayedButton extends React.Component {

  onHandleClick = (e) => {
    e.persist() // persist event
    setTimeout(() => {
      this.props.onDelayedClick(e) // callback function
    }, this.props.delay)  // represents number/time it is setTimeout to
  }


  render() {
    return (
      <button onClick={this.onHandleClick}>Button</button>
    )
  }
}

export default DelayedButton
