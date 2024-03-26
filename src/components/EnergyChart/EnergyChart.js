import React from "react";
import { Line } from "react-chartjs-2";
import totalCost from "../../Data/totalCost.json";
import avgCost from "../../Data/avgCost.json";

const EnergyChart = () => {
  return (
    <div style={{ overflow: 'hidden', transform:'translate(-2%,-17%)' }}>
      <React.Fragment>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {/* First Line Graph */}
            <div className="col-md-6 text-center" style={{ width: "50%", height: "260px", transform:'translate(-5%,4%)', display: 'inline-block' }}>
              <Line
                data={{
                  labels: totalCost.map((data) => data.label),
                  datasets: [
                    {
                      label: "Total Cost",
                      data: totalCost.map((data) => data.revenue),
                      backgroundColor: "#064FF0",
                      borderColor: "#064FF0",
                    }
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  animation: {
                    duration: 1000,
                    easing: 'easeInSine',
                  },
                  scales: {
                    x: {
                      title: {
                        display: true,
                        color: "black",
                        text: 'Days',
                      },
                    },
                    y: {
                      type: 'linear',
                      min: 0,
                      max: 10000,
                      ticks: {
                        color: "black",
                        stepSize: 1000,
                      },
                      title: {
                        display: true,
                        color: "black",
                        text: 'Revenue in ₹',
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.5,
                      align: 'center',
                    },
                  },
                  plugins: {
                    // title: {
                    //   display: true,
                    //   text: "Total Cost (₹)",
                    //   align: 'center',
                    //   font: {
                    //     size: 16,
                    //     weight: "bold",
                    //   },
                    // },
                    legend: {
                      labels: {
                        usePointStyle: true,
                      }
                    }
                  },
                }}
                height={300}
                width={400}
              />
            </div>

            {/* Second Line Graph */}
            <div className="col-md-6 text-center" style={{ width: "50%", height: "260px", transform:'translate(22%,4%)', display: 'inline-block' }}>
              <Line
                data={{
                  labels: avgCost.map((data) => data.label),
                  datasets: [
                    {
                      label: "Avg. Cost",
                      data: avgCost.map((data) => data.revenue),
                      backgroundColor: "#FF0000",
                      borderColor: "#FF0000",
                    }
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  animation: {
                    duration: 1000,
                    easing: 'easeInSine',
                  },
                  scales: {
                    x: {
                      title: {
                        display: true,
                        color: "black",
                        text: 'Time in Months',
                      },
                    },
                    y: {
                      type: 'linear',
                      min: 0,
                      max: 16,
                      ticks: {
                        color: "black",
                        stepSize: 2,
                      },
                      title: {
                        display: true,
                        color: "black",
                        text: 'Avg. Cost/Unit',
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.5,
                      align: 'center',
                    },
                  },
                  plugins: {
                    legend: {
                      labels: {
                        usePointStyle: true,
                      }
                    }
                  },
                }}
                height={300}
                width={400}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default EnergyChart;
