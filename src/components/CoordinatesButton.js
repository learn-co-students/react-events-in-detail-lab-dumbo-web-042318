// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  render() {
    return <button
      onClick={(e) => this.props.onReceiveCoordinates([e.pageX, e.pageY])}
    >
      CoordinatesButton
    </button>
  }
}

export default CoordinatesButton;
