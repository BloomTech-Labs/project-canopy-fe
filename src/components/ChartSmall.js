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

const ChartSmall = (props) => {
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
    label: "Vulnerable",
    backgroundColor: 'rgb(239, 156, 73)',
    borderWidth: 1,
    data: [363, 1088, 481, 72],
   
  }, {
    label: "Endangered",
    backgroundColor: 'rgb(228, 94, 45)',
    borderWidth: 1,
    data: [72, 600, 73, 16],
    
  }, {
    label: "Critically Endangered",
    backgroundColor: 'rgb(255, 0, 0)',
    borderWidth: 1,
    data: [55, 200, 77, 33],
  }]
};

var options = {
  legend:{
    position: 'bottom',
  },
  scales: {
   xAxes: [{
      barThickness: 100,
    }, {
        display:false,
      barThickness: 100,
      // these are needed because the bar controller defaults set only the first x axis properties
      type: 'category',
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      gridLines: {
        offsetGridLines: true
      },
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
export default connect(mapStateToProps,{getThreatenedCounts,getThreatenedCountsByHabitat,getThreatenedCountsByCountry})(ChartSmall);