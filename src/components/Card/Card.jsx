import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import PieChart from "../PieChart/PieChart";
import { cardsData } from "../../Data/Data";
import EnergyChart from "../EnergyChart/EnergyChart";
import Map from '../Map/Map';

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
    
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={100}
          text={`${param.barValue}`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
        {/* <span>Last 24 hours</span> */}
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const { options } = param;
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      series: param.series,
      series: param.series2,

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["white"],
      },
      // tooltip: {
      //   x: {
      //     format: "dd/MM/yy HH:mm",
      //   },
      // },
      grid: {
        show: true,
      },
      
      xaxis: {
        type: 'linear',
        tickPlacement: 'on',
        tickAmount: 36, // Set tickAmount to the number of data points
        position: 'bottom',
        categories: ["0","3","6","9","12","15","18","21","24","27","30","33","36"],
        title: {
          display: true,
          text: 'Time in Months',
        },
        // min: 0,
        // max: 36,  // Adjust the max value according to your data range
        // tickAmount: 15,
        // labels: {
        //   formatter: (value) => Math.round(value), // Format y-axis labels as integers
        // }
      },

      yaxis: {
        title: {
          text: 'Revenue in ₹ (Crores)',
        },
        // categories: ["0","3","6","9","12","15","18","21","24","27","30","33","36"],
        min: 0,
        max: 15,  // Adjust the max value according to your data range
        tickAmount: 8,
      },
    },
  };
  const isBatteryPacks = param.title === "Battery Packs"; 
  const isGuidelines = param.title === "Guidelines"; 
  const isRevenue = param.title === "Revenue";
  const isEnergySold = param.title === "Energy Sold";
  const isServiceStations = param.title === "Service Stations";
  
  return (
    <div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <div>
          {/* Conditionally render either a line graph or a pie chart */}
          {isGuidelines ? (
            <div>
              <p className="card-text" style={{fontSize: '1.2rem', fontFamily: "sans-serif", color: 'white', fontWeight: 'bold', transform: 'translateX(28%)' }}>Avg Battery Life: 2MWh</p>
              <p className="card-text" style={{fontSize: '1.2rem', fontFamily: "sans-serif", color: "white", fontWeight: 'bold', transform: 'translateX(28%)' }}>Avg. Battery Cost: ₹ 30000</p>
              <p className="card-text" style={{fontSize: '1.2rem', fontFamily: "sans-serif", color: "white", fontWeight: 'bold', transform: 'translateX(28%)' }}>Avg. BreakEven Cost: ₹ 55000</p>
              <p className="card-text" style={{fontSize: '1.2rem', fontFamily: "sans-serif", color: "white", fontWeight: 'bold', transform: 'translateX(28%)' }}>Avg. Target Cost: ₹ 65000</p>
            </div>
          ) : isBatteryPacks ? (
            <div>
            <PieChart style={{transform: 'translateY(-19%)'}}/>
            <p style={{transform: 'translate(79%,-709%)',color:"white",fontWeight: 'bold', fontSize:'20px'
      }}>Residual Value : ₹4.16cr</p>
            </div>
          ) : isRevenue ? (
            <Chart
  options={{
    ...data.options,
    yaxis: {
      ...data.options.yaxis,
      labels: {
        formatter: function (value) {
          return Math.round(value); // Round off the y-axis value
        },
        ...data.options.yaxis.labels // Retain other label settings if necessary
      }
    }
  }}
  series={param.series}
  type="line"
  height="260"
  width='550'
  style={{ transform: 'translateX(9%)' }}
/>

          ) : isEnergySold ? (
            <div style={{ display: 'flex', flexDirection: 'row', width:'150%' }}>
  <Chart
  options={{
    ...data.options,
    yaxis: {
      ...data.options.yaxis,
      title: {
        text: 'Energy sold in MWh',
      },
      labels: {
        formatter: function (value) {
          return Math.round(value); // Round off the y-axis value
        },
        ...data.options.yaxis.labels, // Retain other label settings if necessary
        tickAmount: 9,
      },
      // Specify the desired y-axis values
      tickAmount: 9,
      min: 0,
      max: 1600,
      tickPositions: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600]
    }
  }}
  series={param.series}
  type="line"
  height="250"
  width='350'
  style={{ marginRight: '3rem'}}
/>

<Chart
  options={{
    ...data.options,
    yaxis: {
      ...data.options.yaxis,
      title: {
        text: 'Price Per Kwh (₹)',
      },
      labels: {
        formatter: function (value) {
          return Math.round(value); // Round off the y-axis value
        },
        ...data.options.yaxis.labels // Retain other label settings if necessary
      },
      tickAmount: 5,
      min: 0,
      max: 80,
      tickPositions: [0, 15, 30, 45, 60, 75]
    }
  }}
  series={[
    { name: 'Price per unit', data: [47, 49, 54, 53], color:'#d51b21' },
    { name: 'Avg cost per unit', data: [22,22,21.5,22],color:'#008000' },
    
  ]}
  type="line"
  height="250"
  width='350'
  
/>

            </div>
            // <EnergyChart/>
          ) : (
            <Map/>
            // <Chart options={data.options} series={param.series} type="line" height="250" width='350' />
          )}
        </div>
      </div>
    </div>
  );
  
}
export default Card;