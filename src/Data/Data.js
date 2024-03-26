import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilUser,
    UilRupeeSign,
    UilPackage,
    UilChart,
    UilBolt,
    UilUserLocation,
    UilMoneybag,
    UilUsdSquare,UilMoneyWithdrawal,
    UilSetting,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";

  export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Home",
    },
    {
        icon: UilUser,
        heading: "Profile",
    },
    {
        icon: UilSetting,
        heading: "Settings",
    },
  ];

  export const guidelineData = [
    {
      title: "Battery Cost",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
    }
  ];

  // Analytics Cards Data
export const cardsData = [
    {
      title: "Guidelines",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
  
      barValue: '',
      value: "Break Even Cost : ₹55000",
      png: UilClipboardAlt,
      series: [
        {
          name: "Guidelines",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Battery Packs",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 2000,
      value: "Residual Value :₹4.16cr",
      png: UilBolt,
      series: [
        {
          name: "Battery Packs",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: '₹7.3cr',
      value: "Total Cost:₹3.2cr",
      png: UilRupeeSign,
      series: [
        {
          name: "Revenue",
          data: [0,2.12,3.93,5.78,7.44],
          color: "#d51b21"
        },
        
          {
            name: "Total Cost",
            data: [1, 4.12, 4.93, 3.08, 3.20],
            color: '#008000'
          }
      ],
      yaxis: {
        labels: {
          formatter: function (value) {
            return Math.round(value); // Round off the y-axis value
          }
        },
      },
      options: { stroke: {
        curve: 'straight',
      },
    },
  },
    {
      title: "Energy Sold",
      color: {
        backGround: "linear-gradient(180deg, #9fc5e8 0%, #6fa8dc 100%)",
        boxShadow: "0px 10px 20px 0px #cfe2f3",
      },
      barValue: '1.35',
      value: "Total Energy (GWh): 1.45",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Energy Charged",
          data: [500, 600, 700, 800, 900, 1050, 1450],
          color: '#d51b21'
        },
        {
          name: "Energy Sold",
          data: [400, 500, 600, 700, 800, 950, 1350],
          color:'#008000'
        },
      ],
      style: {
        valueFontSize: '16px', // Set the font size for the value
      },
    },

    {
      title: "Service Stations",
      color: {
        backGround: "linear-gradient(180deg, #a2c4c9 0%, #45818e 100%)",
        boxShadow: "0px 10px 20px 0px #d0e0e3 ",
      },
      barValue: 20,
      value: "Zone:3",
      png: UilUserLocation,
      series: [
        {
          name: "Service Stations",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: " Stations",
          data: [10, 50, 68, 35, 13, 20, 50],
        },
      ],
    },
  ];