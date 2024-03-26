// import React, { useState } from 'react';
// import Select from 'react-select';
// import {Box,TextField} from '@mui/material';
// import DatePicker from '../DatePicker/DatePicker';



//     const Countries = [
//         { label: "All", value: 6000 },
//         { label: "Chandigarh", value:61  },
//         { label: "Panchkula", value: 54 },
//         { label: "Mohali", value: 43 }
        
//       ];
//       const Sites = [
//         { label: "All", value: 6000 },
//         { label: "Sector 26 ,Chandigarh", value: 61 },
//         { label: "Sector 3, Panchkula", value: 54 },
//         { label: "Sector 10, Mohali", value: 43 }
//       ];

// const Dropdown = () => {

//     const [selectedCountry1, setSelectedCountry1] = useState(Countries[0]);
//     const [selectedCountry2, setSelectedCountry2] = useState(Sites[0]);

//     const [chartData, setChartData] = useState({
//         labels: ['Available(810)', 'Inuse(900)', 'Charging(780)', 'Waiting(2130)', 'Comissioned(420)', 'De-Comission Candidates(360)', 'Non Functional(600)'],
//         datasets: [
//           {
//             data: [810, 900, 780, 2130, 420, 360,600],
//             backgroundColor: ['#5D3FD3', '#E6E6FA', '#CBC3E3', '#DA70D6', '#E0B0FF', '#AA98A9', '#FF0000'],
//           },
//         ],
//       });

//     const updateChartData = (country1, country2) => {
//         if (country1 && country2) {
//           setChartData({
//             labels: ['Available(405)', 'Inuse(450)', 'Charging(390)', 'Waiting(1530)', 'Comissioned(210)', 'De-Comission Candidates(180)', 'Non Functional(300)'],
//             datasets: [
//               {
//                 data: [405, 450, 390, 1530, 210, 180, 300],
//                 backgroundColor: ['#5D3FD3', '#E6E6FA', '#CBC3E3', '#DA70D6', '#E0B0FF', '#AA98A9', '#FF0000'],
//               },
//             ],
//           });
//         }
//         else {
//           setChartData({
//             labels: ['Available(810)', 'Inuse(900)', 'Charging(780)', 'Waiting(2130)', 'Comissioned(420)', 'De-Comission Candidates(360)', 'Non Functional(600)'],
//             datasets: [
//               {
//                 data: [810, 900, 780, 2130, 420, 360,600],
//                 backgroundColor: ['#5D3FD3', '#E6E6FA', '#CBC3E3', '#DA70D6', '#E0B0FF', '#AA98A9',"#FF0000"],
//               },
//             ],
//           });
//         }
//       };

//     const handleCountry1Change = (selectedOption) => {
//         setSelectedCountry1(selectedOption);
//         updateChartData(selectedOption, selectedCountry2);
//       };
    
//       const handleCountry2Change = (selectedOption) => {
//         setSelectedCountry2(selectedOption);
//         updateChartData(selectedCountry1, selectedOption);
//       };


//     const customStyles = {
//         control: (provided, state) => ({
//           ...provided,
//           width: '120px',
//           backgroundColor: 'transparent' // Set the desired width for the dropdown menu
//         }),
//       };


// return (
  
//     <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//     <div style={{ display: 'flex' }}>
//     <div style={{ position:'relative', margin: '20px', display: 'table-row', flexDirection: 'row', alignItems: 'flex-start', transform:'translate(30%,-70%)',marginTop: '55%', marginLeft: '457%'}}>
//     <h6>Select Region:</h6><Select options={Countries} value={selectedCountry1} onChange={handleCountry1Change} styles={customStyles} />
//     <div style={{ marginBottom: '30px', justifyContent: 'flex-start' }}></div>
//     <h6>Select Station:</h6><Select options={Sites} value={selectedCountry2} onChange={handleCountry2Change} styles={customStyles} />
//     <DatePicker/>
//   </div>
//   </div>
//   </div>
// );
// }
// export default Dropdown;