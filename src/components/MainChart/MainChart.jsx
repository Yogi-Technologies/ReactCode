import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import './MainChart.css'; // You can create a separate CSS file for styling
import GuidelineCard from '../GuidelineCard/GuidelineCard';

const MainChart = ({ param }) => {
  const data = {
    series:[ {
      name: 'Actual',
      data: ['0','2.12','3.93','5.78','7.44' ],
      markers: {
        size: 5,
      },
    },{
      name: 'Target',
      data: ['0','2.12','4.08','5.89','7.56','8.7','9.75', '10.69', '11.55', '12.31', '12.99', '13.58', '14.1' ],
    },
    {
      name: 'Breakeven',
      data: ['0','1.88','3.62','5.22','6.77','7.72','8.64', '9.48', '10.24', '10.91', '11.52', '12.04', '12.5' ],
    },
  ], // Assuming series data is provided in the param prop
  
    options: {
      
      chart: {
        type: 'line',
        height: 1600,
      },
      colors: ['#FF0000','#13ae4b','#ffa733'],
      stroke: {
        curve: 'smooth',
        colors: ['white'],
      },
      dropShadow: {
        enabled: false,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
      // fill: {
      //   colors: ['#880808', '#13ae4b', '#ffa733'],
      //   type: 'gradient',
      // },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      //   colors: ['white'],
      // },
      grid: {
        show: true,
      },
      title:{
        text: 'Revenue', // Add your desired title
        align: 'center',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
        }
      },
      xaxis: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Time in Months',
        },
        // ticks: {
        //   min: 0,     // Starting point
        //   max: 36,    // Endpoint
        //   stepSize: 3, // Step size
        // },
        categories: ["0","3","6","9","12","15","18","21","24","27","30","33","36"],
      },
      yaxis: {
        title: {
          text: 'Revenue in ₹ (Crores)',
        },
        // categories: ["0","3","6","9","12","15","18","21","24","27","30","33","36"],
        // min: 0,
        // max: 15,  // Adjust the max value according to your data range
      },
    },
  };

  // useEffect(() => {
  //   import('C:/Users/sarora/OneDrive/Desktop/React_Admin/admin-app/src/ExcelConversionToJson/Actual.json')
  //     .then((data) => {
  //       // Extract relevant data from the JSON file
  //       const seriesData = data.map((item) => item.__EMPTY);

  //       // Update the chartData state with the actual data from the JSON file
  //       setChartData((prevData) => ({
  //         ...prevData,
  //         series: [{ name: 'Revenue', data: seriesData }],
  //         options: {
  //           ...prevData.options,
  //           xaxis: {
  //             ...prevData.options.xaxis,
  //             categories: data.map((item) => item.Quarter), // Assuming Quarter as X-axis data
  //           },
  //           yaxis: {
  //             ...prevData.options.yaxis,
  //             max: Math.max(...seriesData) + 1000000, // Adjust the max value based on your data range
  //           },
  //         },
  //       }));
  //     })
  //     .catch((error) => {
  //       console.error('Error loading chart data:', error);
  //     });
  // }, []);

  return (
    <div className="MainChart" style={{ height: '450px', width:'90%', transform: 'translate(-2%,5%)'}}>
      {/* <h2>Apex Area Chart</h2> */}
      <Chart options={data.options} series={data.series} type="line" height={450} />
      {/* <GuidelineCard style={{position: 'absolute', right: '8%', top: '-10%'}}/> */}
    </div>
  );
};

export default MainChart;
