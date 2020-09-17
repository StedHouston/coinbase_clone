import React, { useState } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


const LineChart = (props) => {
  let { prices, times } = props;
  console.log(times)

  let newTimes = []
  for(let i = 0; i < times.length; i++){
    const milliseconds = times[i] * 1000
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString('en-US', {timeZoneName: 'short'});
    let list = humanDateFormat.split(' ')
    if(list[1].length === 7){
      const updatedDate = list[1].slice(0, 4) + ` ${list[2]}`
      newTimes.push(updatedDate)
    }else{
      const updatedDate = list[1].slice(0, 5) + ` ${list[2]}`
      newTimes.push(updatedDate)
    }


    // newTimes.push(humanDateFormat)
  }


  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      type: 'datetime',
      labels: {
          format: '{value:%H %M}'
      },
      categories: newTimes,
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
      </div>
    )
}

export default LineChart;
