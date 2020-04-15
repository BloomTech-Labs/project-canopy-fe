import React,{useEffect, useState, useRef} from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {connect} from 'react-redux';
import Chartjs from 'chart.js';

import {
  getThreatenedCounts,
  // getThreatenedCountsByHabitat,
  // getThreatenedCountsByCountry,
  // getAllSpeciesCountsByCountry
} from '../actions/index'


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
    // props.getThreatenedCountsByCountry()
    // props.getThreatenedCountsByHabitat()
    // props.getAllSpeciesCountsByCountry()
  },[])

// console.log('this is all by class', props.allCountsByClass.classCount)

 const allCountsData = props.allCountsByClass.map(count => {
   return count.classCount
 })

 console.log(allCountsData)
 
 const allThreatenedCounts = props.threatendCountsByClass.map(count => {
    return count.threatenedCount
 })
 console.log('allcount',props.allCountsByClass)
 console.log('count by class',props.threatendCountsByClass)
 console.log(allThreatenedCounts)
var data = {
  labels: ["Amphibians", "Birds", "Mammals", "Reptiles"],
  datasets: [{
    label: "Total number of species",
    backgroundColor: 'rgb(212, 212, 212, 0.2)',
    borderWidth: 1,
    data: allCountsData,
    xAxisID: "bar-x-axis1",
  }, {
    label: "Total Number of threatened species",
    backgroundColor: 'rgb(255, 0, 0)',
    borderWidth: 1,
    data: allThreatenedCounts,
    xAxisID: "bar-x-axis2",
  }]
};

var options = {
  legend:{
    position: 'right',
  },
  scales: {
   xAxes: [{
      stacked: true,
      id: "bar-x-axis1",
      barThickness: 100,
    }, {
      display: false,
      stacked: true,
      id: "bar-x-axis2",
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
  }, [props.allCountsByClass, props.threatendCountsByClass]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    allCountsByClass:state.allCountsByClass,
    threatendCountsByClass: state.threatendCountsByClass,
    // threatenedCountsByHabitat:state.threatenedCountsByHabitat,
    // threatenedCountsByCountry:state.threatenedCountsByCountry,
    // allSpeciesCountsByCountry: state.allSpeciesCountsByCountry
  }
}
export default connect(mapStateToProps,{
  getThreatenedCounts, 
  // getThreatenedCountsByHabitat, 
  // getThreatenedCountsByCountry, 
  // getAllSpeciesCountsByCountry
})(Chart);