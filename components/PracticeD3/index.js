import React from 'react'

import { graph } from './PracticeD3.scss'
import { Button } from '../Button'

import className from 'classnames'


export class PracticeD3 extends React.Component{
  constructor(props){
    super(props);
  }

  selectPractice()
  {
    var myStyles = [
        { width : 200, color : '#64B5F6', name: 'Connor Kane' },
        { width : 210, color : '#E57373', name: 'Connor Lame' },
        { width : 190, color : '#64B5F6', name: 'Connor Tame' },
        { width : 221, color : '#E57373', name: 'Connor Fame' },
        { width : 231, color : '#64B5F6', name: 'Connor Mame' },
        { width : 185, color : '#E57373', name: 'Connor Same' }
      ];

    d3.selectAll('#chart').selectAll('div')
      .data(myStyles)
      .enter().append('div')
      .classed('item', true)
      .text(function(d){
        return d.name;
      })
      .style('background' , function(d) {
        return d.color; 
      })
      .style('color', 'white')
      .style('width', function(d){
        return d.width + 'px';
      })
  }

  render () {    
    return (
        <section id="chart">
          <h2>D3 Practice</h2>
          <Button size={ 'small' } color={ 'blue' } text={ 'Select' } handleOnClick={
            k=>{
              this.selectPractice()
            }
          }/>
        </section>
    )
  }
}