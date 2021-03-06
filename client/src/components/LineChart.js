import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


const LineChart = (props) => {
  let { prices, times } = props;

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
  }


  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: ''
    },
    xAxis: {
      type: 'datetime',
      labels: {
          format: '{value:%H %M}'
      },
      categories: newTimes,
    },
    yAxis: {
      title: {
        enabled: false,
      },
    },
    series: [
      { data: prices,
        showInLegend: false }
    ],
    chart: {
      width: 725
    },
  });


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
