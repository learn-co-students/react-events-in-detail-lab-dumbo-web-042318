// Code DelayedButton Component Here
import React from 'react';

  class DelayedButton extends React.Component {

    handleOnClick = (e) => {
      e.persist();
      setTimeout(() => {
        this.props.onDelayedClick(e);
      }, this.props.delay);
    }

    render() {
      return (
        <button onClick={this.handleOnClick}></button>
      );
    }
  }

  export default DelayedButton;
