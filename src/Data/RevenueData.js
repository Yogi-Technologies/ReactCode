import { UilRupeeSign } from "@iconscout/react-unicons";

export const revenueData = [
  {
    title: "Revenue",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: '₹7.3cr',
    value: "Energy Sold(GWh): 1.45",
    png: UilRupeeSign,
    series: [
      {
        name: "Revenue",
        data: [0, 2.12, 3.93, 5.78, 7.44],
      },
    ],
    series2: [
      {
        name: "Price Per Unit in ₹",
        data: [7, 7.5, 6.5, 5.5, 7.3],
        color: '#d51b21'
      },
      {
        name: "Avg Cost Per Unit in ₹",
        data: [6, 6.5, 5.5, 4.5, 6.3],
        color:'#008000'
      }
    ],
    options: {
      stroke: {
        curve: 'straight',
      },
      yaxis: [
        {
          title: {
            text: 'Revenue',
          }
        },
        {
          opposite: true,
          title: {
            text: 'Price Per Unit in ₹',
          }
        }
      ],
    },
  }
];
