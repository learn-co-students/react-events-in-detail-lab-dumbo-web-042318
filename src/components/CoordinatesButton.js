// Code CoordinatesButton Component Here

import React, { Component } from 'react';

class CoordinatesButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.persist()
    const mouseCoordinates =
      [e.screenX, e.screenY]
      this.props.onReceiveCoordinates(mouseCoordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        CoordinatesButton
      </button>
    );
  }
}

export default CoordinatesButton;
