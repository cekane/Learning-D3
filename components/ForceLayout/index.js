import React from 'react'

import {  } from './ForceLayout.scss'

import className from 'classnames'

export class ForceLayout extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    var w = 1000,
        h = 1000;

    var circleWidth = 6;

    var nodes = [
      { name: "Carbon 1", target: [1, 5, 6]},
      { name: "Carbon 2", target: [0, 1, 7]},
      { name: "Carbon 3", target: [1, 2, 8]},
      { name: "Carbon 4", target: [2, 3, 9]},
      { name: "Carbon 5", target: [3, 4, 10]},
      { name: "Carbon 6", target: [4, 5, 11]},
      { name: "Hydrogen 1", target: [7]},
      { name: "Hydrogen 2", target: [8]},
      { name: "Hydrogen 3", target: [9]},
      { name: "Hydrogen 4", target: [10]},
      { name: "Hydrogen 5", target: [11]},
      { name: "Hydrogen 6", target: [6]}      
    ]

    

    var links = []

    nodes.map(k=>{
      if(k.target !== undefined){
        console.log("k", k)
        k.target.map(x=>{
          console.log("x", x)
          links.push({
            source: k,
            target: nodes[x]
          })
        })
      }
    })

    var myChart = d3.select("#"+this.props.chartID)
                    .append('svg')
                    .attr('width', w)
                    .attr('height', h)

    var force = d3.layout.force()
                  .nodes(nodes)
                  .links([])
                  .gravity(0.1)
                  .charge(-1000)
                  .size([w, h])

    var link = myChart.selectAll('line')
                      .data(links).enter().append('line')
                      .attr('stroke', '#708284')

    var node = myChart.selectAll('circle')
                      .data(nodes).enter()
                      .append('g')
                      .call(force.drag)

    node.append('circle')
        .attr('cx', function(d){
          return d.x;
        })
        .attr('cy', function(d){
          return d.y;
        })
        .attr('r', circleWidth)

    node.append('text')
        .text(function(d){
          return d.name
        })
        .attr('x', function(d, i){
          if(i>0){return circleWidth+5}
          else{return circleWidth-10}
        })
        .attr('text-anchor', function(d, i){
          if(i>0){return 'begining'}
          else{return 'end'}
        })

    force.on('tick', function(e){
      node.attr('transform', function(d,i){
        return 'translate('+d.x+','+d.y+')';
      })

      link
        .attr('x1', function(d){ return d.source.x })
        .attr('y1', function(d){ return d.source.y })
        .attr('x2', function(d){ return d.target.x })
        .attr('y2', function(d){ return d.target.y })
    })

    force.start()
  }

  render () {
    return (
      <div>
        <h2>Force Layout</h2>
        <div id={this.props.chartID}/>
      </div>
    )
  }
}