import React from 'react'

import { oContainer } from './BarChart.scss'


import className from 'classnames'

export class BarChart extends React.Component{
  constructor(props){
    super(props);
  }

  assignColor(barData)
  {
    if (this.props.colorAlign === 'horizontal'){  
      return d3.scale.linear()
                .domain([0, barData.length * .33, barData.length * .66, barData.length])
                .range(['#64B5F6', '#FDD835', '#FB8C00' ,'#E53935']);
    }
    else{
      return d3.scale.linear()
                .domain([0, d3.max(barData)])
                .range(['#BA68C8', '#8E24AA']);
    }
  }

  colorStyle(color){
    if(this.props.colorAlign === 'horizontal'){
      return function(d, i){
        return color(i);
      }
    }
    else{
      return color
    }
  }

  componentDidMount(){
    var barData = []
    const that =this
    var margin = { top: 30, right: 30 , bottom: 40, left: 50 }
    var height = 400 - margin.top - margin.bottom,
        width = 900 - margin.left - margin.right,
        barWidth = 50,
        barOffset = 5;

    d3.tsv('./components/BarChart/Data/data.tsv', function(data){
      data.map(k=>{
        barData.push(k.Value)
      })

      var yScale = d3.scale.linear()
                    .domain([0, d3.max(barData)])
                    .range([0, height])

      var xScale = d3.scale.ordinal()
                     .domain(d3.range(0, barData.length))
                     .rangeBands([0, width], .1)

      var color = that.assignColor(barData)

      var tooltip = d3.select("#"+that.props.chartID)
                      .append('div')
                      .style('position', 'absolute')
                      .style('padding', '0 10px')
                      .style('background', 'white')
                      .style('opacity', 0)

      var barChart = d3.select("#"+that.props.chartID)
                       .append('svg')
                       .style('background', '#E7E0CB')
                          .classed('svg'+that.props.chartID, true)
                          .attr('width', width + margin.left + margin.right)
                          .attr('height', height + margin.top + margin.bottom )
                          .append('g')
                          .attr('transform', 'translate('+ margin.left+', '+margin.top+')')
                          .selectAll('rect').data(barData)
                          .enter().append('rect')
                            .style('fill', that.colorStyle( color ))
                            .attr('width', xScale.rangeBand())
                            .attr('height', 0)
                            .attr('x', function(d, i){
                              return xScale(i)
                            })
                            .attr('y', height)

      .on('mouseover', function(d){
        tooltip.transition()
          .style('opacity', .9)

        tooltip.html(d)
          .style('left', (d3.event.pageX - 35) + 'px')
          .style('top', (d3.event.pageY - 30) + 'px')
        
        d3.select(this)
          .style('opacity', .5)
      })

      .on('mouseout', function(d){
        d3.select(this)
          .style('opacity', 1)

        tooltip.transition()
          .style('opacity', 0)
      })

      barChart.transition()
        .attr('height', function(d){
              return yScale(d);
          })
        .attr('y', function(d){
              return height - yScale(d);
          })
        .delay(function(d, i){
          return i * 10;
        })
        .duration(1000)
        .ease('elastic')


      var vGuideScale = d3.scale.linear()
                          .domain([0, d3.max(barData)])
                          .range([height, 0])

      var vAxis = d3.svg.axis()
                    .scale(vGuideScale)
                    .orient('left')
                    .ticks(10)

      var hAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom')
                    .ticks(xScale.domain().filter(function(d,i){
                      return !(i% (barData.length/5));
                    }))

      var vGuide = d3.select('.svg'+that.props.chartID).append('g')
        vAxis(vGuide)
        vGuide.attr('transform', 'translate('+ margin.left + ',' + margin.top +')')
        vGuide.selectAll('path')
          .style({ fill:'none' , stroke: "#000"})
        vGuide.selectAll('line')
          .style({ stroke: "#000"})

      

      var hGuide = d3.select('.svg'+that.props.chartID).append('g')
        hAxis(hGuide)
        hGuide.attr('transform', 'translate('+ margin.left + ',' + (height + margin.top) +')')
        hGuide.selectAll('path')
          .style({ fill:'none' , stroke: "#000"})
        hGuide.selectAll('line')
          .style({ stroke: "#000"})


    })
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