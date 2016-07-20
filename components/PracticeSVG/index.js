import React from 'react'

import { svgStyle, red, lightRed, oContainer } from './PracticeSVG.scss'


import className from 'classnames'

export class PracticeSVG extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
        <div className={ oContainer }>
          <h2>SVG Practice</h2>
          <svg width="600" height="400" className={ svgStyle }>
            <rect x="250" y="150" width="100" height="100" className={ red } />
            <circle cx="300" cy="150" r="50" className={ lightRed }/>
            <text x="10" y="390" fontFamily="sans-serif" fontSize="25" fill="white">SVG Graphic</text>
            <g id="triangle">
              <polyline points="250 250, 300 350, 350 250" className={lightRed}/>
            </g>
          </svg>
        </div>
    )
  }
}