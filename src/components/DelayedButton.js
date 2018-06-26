import React from 'react';

class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={ this.handleClick }>Delayed</button>
    );
  }

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }
}

export default DelayedButton;
