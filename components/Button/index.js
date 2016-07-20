import React from 'react'

import { button, small, medium, blue, red, orange, yellow, purple } from './Button.scss'


import className from 'classnames'

export class Button extends React.Component{
  constructor(props){
    super(props);
  }

  render () {

  	var size = '';
  	switch(this.props.size){
  		case 'small':
  			size = small;
  			break;
  		case 'medium':
  			size = medium;
  			break;
  	}

  	var color = '';
  	switch(this.props.color){
  		case 'blue':
  			color = blue;
  			break;
  		case 'red':
  			color = red;
  			break;
  		case 'orange':
  			color = orange;
  			break;
  		case 'yellow':
  			color = yellow;
  			break;
      case 'purple':
        color = purple;
        break;
  	}

    return (
        <div className={ className(button, size, color)  } onClick={ this.props.handleOnClick }>{this.props.text}</div>
    )
  }
}