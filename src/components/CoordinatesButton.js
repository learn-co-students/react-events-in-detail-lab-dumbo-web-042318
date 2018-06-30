import React, { Component } from 'react'

class CoordinatesButton extends Component {

  //onReceiveCoordinates is the prop being passed
  //console.log(props);

  handleClick = (e) => {
    // console.log(this.props) returns an empty obj
    // populate it with the coordinates
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }


  render(){
  console.log(this.props);

    return <button onClick={this.handleClick}></button>
  }
}

export default CoordinatesButton
