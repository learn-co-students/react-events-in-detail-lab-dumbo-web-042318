// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    clickHandler = (e) => {
        const coordinates = [e.screenX, e.screenY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={this.clickHandler}></button>
        )
    }

}

export default CoordinatesButton