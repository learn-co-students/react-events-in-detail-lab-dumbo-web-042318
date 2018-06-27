import React from 'react'

class DelayedButton extends React.Component {



  handleClick = (e) => {
    e.persist()
    const delayed = () => {

      this.props.onDelayedClick(e)
    }
    setTimeout(delayed, this.props.delay)

  }
  render () {
    return (
      <button onClick={this.handleClick}>
        Delayed
      </button>
    )
  }
}

export default DelayedButton
