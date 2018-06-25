// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {


  clickEvent = (e) => {
    
    this.props.onReceiveCoordinates([e.screenX, e.screenY])
  }



  render() {
    return (
      <button onClick={this.clickEvent}/>
    )
  }
}

export default CoordinatesButton;
