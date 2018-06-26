import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={ e => this.props.onReceiveCoordinates([e.pageX, e.pageY]) } >Cooridnates</button>
    )
  }
}

export default CoordinatesButton;
