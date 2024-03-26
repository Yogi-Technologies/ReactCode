import './App.css'
import SideBar from './components/SideBar'
import MainDash from './components/MainDash/MainDash';
import MainChart from './components/MainChart/MainChart';


function App() {
  const chartData = {
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
      // Add more series if needed
    ],
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z',
    ],
  };
  return (
    <div className="App">
      
        <div className='AppGlass'>
          
          <SideBar/>
          {/* <MainChart/> */}
          
          <MainChart param={chartData} />
          
          <MainDash/>
          
        </div>
    </div>
  );
}

export default App;