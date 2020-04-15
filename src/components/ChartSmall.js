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

const ChartSmall = (props) => {
  useEffect(() => {
    props.getThreatenedCounts()
    // props.getThreatenedCountsByCountry()
    // props.getThreatenedCountsByHabitat()
    // props.getAllSpeciesCountsByCountry()
  },[])

console.log('all threat',props.threatendCountsByClass)
const vulnerable = [];
const endangered = [];
const critically_endangered = [];
props.threatendCountsByClass.map(item => {
  item.threatLevels.map(threat => {
    if(threat.rank === 'Critically Endangered'){
      critically_endangered.push(threat.count)
    }else if(threat.rank === 'Endangered'){
      endangered.push(threat.count)
    }else if(threat.rank === 'Vulnerable'){
      vulnerable.push(threat.count)
    }
  })
})
var data = {
  labels: ["Amphibians", "Birds", "Mammals", "Reptiles"],
  datasets: [{
    label: "Vulnerable",
    backgroundColor: 'rgb(239, 156, 73)',
    borderWidth: 1,
    data: vulnerable,
   
  }, {
    label: "Endangered",
    backgroundColor: 'rgb(228, 94, 45)',
    borderWidth: 1,
    data: endangered,
    
  }, {
    label: "Critically Endangered",
    backgroundColor: 'rgb(255, 0, 0)',
    borderWidth: 1,
    data: critically_endangered,
  }]
};

var options = {
  legend:{
    position: 'bottom',
  },
  scales: {
   xAxes: [{
      barThickness: 50,
    }, {
        display:false,
      barThickness: 50,
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
  }, [props.threatendCountsByClass]);

  return (
    
      <canvas ref={chartContainer} />
    
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
})(ChartSmall);