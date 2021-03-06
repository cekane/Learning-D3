import React from 'react';

import { Button } from '../Button'
import { PracticeD3 } from '../PracticeD3'
import { PracticeSVG } from '../PracticeSVG'
import { BarChart } from '../BarChart'
import { PieChart } from '../PieChart'
import { VerticalBarChart } from '../VerticalBarChart'
import { box, chart, oContainer, flexContainer } from './Container.scss'
import { ForceLayout } from '../ForceLayout'

export class Container extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    var lineData = [{ x: 1, y: 5 }, { x: 20, y:20 }, { x: 40, y:10 }, { x:60, y:40 }, { x:80, y:5 }, { x:100, y:60 }]
    return (
      <div id='body' className={ oContainer }>
        <div className={box}  id='funColors'/>
        <div className={box}  id='funColors'/>


        <Button text={ 'Colors' } handleOnClick={ 
          k=>{ d3.selectAll("#funColors").style("background-color", function() { 
              return "hsl(" + Math.random() * 360 + ",100%,50%)"; 
            });
          }
        }
        size={ 'small' }/>

        <Button text={ 'To Black' } handleOnClick={ 
          x=>{
            d3.select("body").transition().duration(1000).style("background-color", "black");
          }
        }
        size={ 'small' }/>

        <Button text={ 'To White' } handleOnClick={ 
          x=>{
            d3.select("body").transition().duration(1000).style("background-color", "white");
          }
        }
        size={ 'small' }/>
        <PracticeD3 data={ lineData } />
        <div className={ flexContainer }>
          <PracticeSVG />
          <BarChart chartID={'chart1'} colorAlign={ 'horizontal' } title={ 'Barchart Horizontal Colors' }/>
          <BarChart chartID={'chart2'} colorAlign={ 'vertical' } title={ 'Barchart Vertical Colors' }/>
          <PieChart chartID={'chart3'} title={ 'Pie Chart' } />
          <VerticalBarChart width={ 'small' } chartID={'chart4'} colorAlign={ 'horizontal' } title={ 'Vertically Aligned Barchart' }/>
          <VerticalBarChart width={ 'medium' } chartID={'chart5'} colorAlign={ 'vertical' } title={ 'Vertically Aligned Barchart' }/>
          <VerticalBarChart width={ 'large' } chartID={'chart6'} colorAlign={ 'horizontal' } title={ 'Vertically Aligned Barchart' }/>
          <ForceLayout chartID={'chart7'} />
        </div>
      </div>
    );
  }
}
