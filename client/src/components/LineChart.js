import React, { useState } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


const LineChart = (props) => {
    let { prices, times } = props;
    console.log(times)
    let apple = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      type: 'datetime',
      labels: {
          format: '{value:%b %e}'
      },
      categories: times,
    },
    series: [
      { data: prices }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e){
              setHoverData(e.target.category)
            }
          }
        }
      }
    }
  });

  const updateSeries = () => {
    setChartOptions({
      series: [
          { data: [Math.random() * 5, 2, 1]}
        ]
    });
  }

  return (
      <div className="LineChart">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
        <h3>Hovering over {hoverData}</h3>
        <button onClick={updateSeries}>Update Series</button>
      </div>
    )
}

export default LineChart;
