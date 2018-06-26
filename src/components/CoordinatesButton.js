import React from 'react'



class CoordinatesButton extends React.Component {

  onHandleClick = (e) => {
    this.props.onReceiveCoordinates([e.screenX, e.screenY])
  }

  render() {
    return (
      <button onClick={this.onHandleClick}>Coordinates</button>
    )
  }
}

export default CoordinatesButton
