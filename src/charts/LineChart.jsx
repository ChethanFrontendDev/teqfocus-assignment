// src/charts/LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = ({ data, options }) => (
  <div className="w-full h-64">
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
