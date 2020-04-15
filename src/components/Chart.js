import React,{useEffect, useState, useRef} from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {connect} from 'react-redux';
import Chartjs from 'chart.js';

import {getThreatenedCounts,getThreatenedCountsByHabitat,getThreatenedCountsByCountry} from '../actions/index'


// const updateDataset = (datasetIndex, newData) => {
//   chartInstance.data.datasets[datasetIndex].data = newData;
//   chartInstance.update();
// };

// const onButtonClick = () => {
//   const data = [1, 2, 3, 4, 5, 6];
//   updateDataset(0, data);
// };

const Chart = (props) => {
  useEffect(() => {
    props.getThreatenedCounts()
    props.getThreatenedCountsByCountry()
    props.getThreatenedCountsByHabitat()
  },[])
console.log('threat', props.threatenedCountsByCountry)
const newData = props.threatenedCountsByCountry.map(country => {
    return country.totalSpeciesInCountry
})
var data = {
  labels: ["Amphibians", "Birds", "Mammals", "Reptiles"],
  datasets: [{
    label: "Total number of species",
    barThickness:'flex',
    backgroundColor: '#F0F0F0',
    borderWidth: 0,
    order:2,
    data: [363, 1088, 481, 72],
    xAxisID: "bar-x-axis1",
  }, {
    label: "Total Number of threatened species",
    barThickness:'flex',
    backgroundColor: '#EA0114',
    borderWidth: 0,
    order:1,
    data: [72, 59, 73, 16],
    xAxisID: "bar-x-axis2",
  }]
};

var options = {
  legend:{
    position: 'right',
    labels: {
      boxWidth:15,
    }
  },
  scales: {
   xAxes: [{
      stacked: true,
      id: "bar-x-axis1",
      barThickness: 65,
    }, {
      display: false,
      stacked: true,
      id: "bar-x-axis2",
      barThickness: 65,
      // these are needed because the bar controller defaults set only the first x axis properties
      offset: true
    }],
    yAxes: [{
      stacked: false,
      ticks: {
        beginAtZero: true
      },
    }],
  }, 

};

console.log('newData', newData)
const chartConfig = {
  type: "bar",
  data: data,
  options: options,
}

console.log(chartConfig.data.datasets[0])
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [props.threatenedCountsByCountry,]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    threatenedCounts:state.threatenedCounts,
    threatenedCountsByHabitat:state.threatenedCountsByHabitat,
    threatenedCountsByCountry:state.threatenedCountsByCountry
  }
}
export default connect(mapStateToProps,{getThreatenedCounts,getThreatenedCountsByHabitat,getThreatenedCountsByCountry})(Chart);