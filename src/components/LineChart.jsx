import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {

  const chartData = {
    labels: data.map(item => item.date), 
    datasets: [
      {
        label: 'Value',
        data: data.map(item => item.value), 
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        },
        grid: {
          display: false
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        },
        grid: {
          borderDash: [5, 5]
        },
        ticks: {
          callback: function(value) {
            return `${value}`;
          }
        }
      }
    }
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
