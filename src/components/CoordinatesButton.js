// Code CoordinatesButton Component Here
import React, {Component} from "react";

class CoordinatesButton extends Component {

  handleCoordinateClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const coordinatesArray = [x, y];

    this.props.onReceiveCoordinates(coordinatesArray);
  }

  render(){
    return(
      <button onClick={this.handleCoordinateClick}></button>
    );
  }

}

export default CoordinatesButton;
