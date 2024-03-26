import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import MainChart from '../MainChart/MainChart'
import Footer from '../Footer/Footer'


const MainDash = () => {

  return (
    <div className="MainDash">
        {/* <h1>Dashboard</h1> */}
        {/* <Navbar/> */}
        <Nav/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default MainDash