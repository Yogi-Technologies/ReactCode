import React, { useState } from 'react';
import './SideBar.css';
import Logo from '../imgs/image.png';
import { SidebarData } from '../Data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons";
import Dropdown from './Dropdown/DropDown';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`SideBar ${isOpen ? 'open' : ''}`}>
      {/* Hamburger Icon */}
      <div className="bars" onClick={toggleDrawer}>
        <div className={`bar ${isOpen ? 'close' : ''}`}></div>
        <div className={`bar ${isOpen ? 'close' : ''}`}></div>
        <div className={`bar ${isOpen ? 'close' : ''}`}></div>
      </div>
      {/* <Dropdown/> */}

      {/* Drawer Content */}
      <div className="drawer">
        {/* Logo */}
        {/* <div className="logo">
          <img src={Logo} alt="" />
          <span>iB<span>aa</span>s</span>
        </div> */}

        {/* Menu Items */}
        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={() => {
                setSelected(index);
                setIsOpen(false); // Close the drawer on item click
              }}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}
        </div>
        

        {/* Sign-out Button */}
        <div className="menuItem" onClick={toggleDrawer}>
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
