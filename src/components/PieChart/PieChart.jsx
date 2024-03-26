import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const chartData = {
    series: [600, 250, 350, 270, 280, 130, 120],
    options: {


      labels: ['Available', 'Inuse', 'Charging', 'Waiting', 'Comissioned', 'De-Comission Candidates', 'Non Functional'],
      colors: ['#5D3FD3', '#E6E6FA', '#CBC3E3', '#DA70D6', '#E0B0FF', '#AA98A9', '#FF0000'],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return `${Math.round(val)}%`;
        },
        offsetY: -20,
      },
      chart: {
        type: 'pie',
        height: 600,
      },
      // title: {
      //   text: 'Battery Packs',
      //   align: 'center',
      //   style: {
      //     color: '#000',
      //     fontSize: '24px',
      //     fontWeight: 'bold',
      //   },
      // },
      fill: {
        type: 'gradient',
      },
      // plotOptions: {
      //   pie: {
      //     customScale: 0.8, // To reduce the size of the pie chart
      //     offsetY: 50, // To adjust the pointing line position
      //     dataLabels: {
      //       offset: -20, // To adjust the position of the labels
      //     },
      //   },
      // },
    },
  };

  return (
    <div style={{ transform: 'translateY(7%)' }}>
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="pie"
      height={470}
      width={470}
      
    />
  </div>
  );
}

export default PieChart;
