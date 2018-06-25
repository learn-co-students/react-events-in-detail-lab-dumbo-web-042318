// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{

  handleClick = (e)=>{
      e.persist() //event persists
        setTimeout(()=>{ //set TO
          this.props.onDelayedClick(e)},//arg one is a callback props
           this.props.delay)//delay is set to this.props.delay
    }

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}
