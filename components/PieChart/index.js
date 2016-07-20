import React from 'react'

import { oContainer } from './PieChart.scss'


import className from 'classnames'

export class PieChart extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    var width = 600,
        height = 400,
        radius = 200;

    var piedata = [
      {label: "Barot", value: 50},
      {label: "Pete", value: 190},
      {label: "Garrot", value: 50},
      {label: "Barot", value: 80}
    ]

    var pie = d3.layout.pie()
      .value(function(d){
        return d.value;
      })

    var arc = d3.svg.arc()
      .outerRadius(radius)

    var colors = d3.scale.linear()
                .range(['#BA68C8', '#8E24AA'])

    var pieChart = d3.select('#'+this.props.chartID).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
      .selectAll('path').data(pie(piedata))
      .enter().append('path')
        .attr('fill', function(d,i){
          return colors(i);
        })
        .attr('d', arc)
  }

  render () {
    return (
      <span id={ this.props.chartID } className={ oContainer }>
        <h2>{ this.props.title }</h2>
        <div id={this.props.chartID}/>
      </span>
    )
  }
}