import React from 'react'

class DelayedButton extends React.Component {

  onHandleClick = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }


  render() {
    return (
      <button onClick={this.onHandleClick}>Button</button>
    )
  }
}

export default DelayedButton
