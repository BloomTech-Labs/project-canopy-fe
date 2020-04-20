import React,{useEffect, useState, useRef} from 'react';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import Chartjs from 'chart.js';

const Chart = (props) => {
  const { threatenedCounts, allCounts } = props;
  
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

    barThickness:'flex',
    backgroundColor: '#F0F0F0',
    borderWidth: 0,
    order:2,
    data: allCountsData,
    xAxisID: "bar-x-axis1",
  }, {
    label: "Total Number of threatened species",
    barThickness:'flex',
    backgroundColor: '#EA0114',
    borderWidth: 0,
    order:1,
    data: allThreatenedCounts,

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


const chartConfig = {
  type: "bar",
  data: data,
  options: options,
}

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if(chartInstance){
        chartInstance.destroy()
      }
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [threatenedCounts, allCounts])

  var data = {
    labels: ["Amphibians", "Birds", "Mammals", "Reptiles"],
    datasets: [{
      label: "Total number of species",

      barThickness:'flex',
      backgroundColor: '#F0F0F0',
      borderWidth: 0,
      order:2,
      data: allCounts,
      xAxisID: "bar-x-axis1",
    }, {
      label: "Total Number of threatened species",
      barThickness:'flex',
      backgroundColor: '#EA0114',
      borderWidth: 0,
      order:1,
      data: threatenedCounts,

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

  const chartConfig = {
    type: "bar",
    data: data,
    options: options,
  }
 
  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    threatenedCounts: state.chartReducer.threatenedCounts,
    allCounts: state.chartReducer.allCounts,
  }
}
export default connect(mapStateToProps,{})(Chart);