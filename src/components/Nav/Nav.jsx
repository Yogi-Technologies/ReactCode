import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { FaUserCircle } from 'react-icons/fa'; // Import the user profile icon
import { BsArrowDown } from 'react-icons/bs'; // Import the arrow-down icon

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <div className="logo" style={{transform: "translate(25%,2%)"}}>
          <img src="https://dynamic.brandcrowd.com/asset/logo/1886c235-0b49-43a2-8386-d9b6f088d7cf/logo-search-grid-1x?logoTemplateVersion=1&v=638315789840530000" alt="Company Logo" />
        </div>
        <div className="brand-name" style={{transform: "translate(635%,-130%)"}}>
          iBaaS
        </div>
      </div>

      <div className="right-section">
        <div className="date-time">
          {/* Display the date and time */}
          {new Date().toLocaleString()}
        </div>
        <div className="profile-icon" onClick={toggleMenu}>
          {/* Your user profile icon */}
          <FaUserCircle />
          <div className={`menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
            {/* Dropdown menu content */}
            <ul>
              <li>Profile</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
