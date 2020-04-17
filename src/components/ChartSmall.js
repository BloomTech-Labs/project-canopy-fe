import React,{useEffect, useState, useRef} from 'react';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import Chartjs from 'chart.js';

const ChartSmall = (props) => {
  const { vulnerable, endangered, critically_endangered } = props;

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [vulnerable, endangered, critically_endangered])


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
      barThickness: 30,
    }, {
        display:false,
      barThickness: 30,
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

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    vulnerable: state.chartReducer.vulnerable,
    endangered: state.chartReducer.endangered,
    critically_endangered: state.chartReducer.critically_endangered
  }
}
export default connect(mapStateToProps,{})(ChartSmall);