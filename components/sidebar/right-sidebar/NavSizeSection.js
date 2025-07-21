import React, { useContext, useState } from 'react';
import { DigiContext } from '../../../context/DigiContext';

const NavSizeSection = () => {
  const { isNavExpanded, toggleNavExpanded, resetNavSize, handleRightSideDropdownToggle, rightSideDropdown } = useContext(DigiContext);
  const [showBackgroundBox, setShowBackgroundBox] = useState(rightSideDropdown.navSize);

  const handleToggle = () => {
    handleRightSideDropdownToggle('navSize');
    setShowBackgroundBox((prevState) => !prevState);
  };
  return (
    <div className="right-sidebar-group" id="navBarSizeGroup">
      <span className="sidebar-subtitle">Navbar Size <span>
      <i 
      className={`fa-light ${rightSideDropdown.navSize ? 'fa-angle-up' : 'fa-angle-down'}`} 
      role="button" 
      onClick={handleToggle}
      ></i>        
            </span></span>
            <div className={`settings-row ${showBackgroundBox ? 'show' : 'hide'}`}>
        <div className="settings-col">
          <div className={`dashboard-icon d-flex gap-1 border rounded ${isNavExpanded.reset ? 'active' : ''}`} id="sidebarDefault" role='button' onClick={resetNavSize}>
            <div className="pb-4 px-1 pt-1 bg-menu">
              <div className="px-2 py-1 rounded-pill bg-nav mb-2"></div>
              <div className="px-2 pt-1 bg-nav mb-1"></div>
              <div className="px-2 pt-1 bg-nav mb-1"></div>
              <div className="px-2 pt-1 bg-nav mb-1"></div>
            </div>
            <div className="w-100 d-flex flex-column justify-content-between">
              <div className="px-2 py-1 bg-menu"></div>
              <div className="px-2 py-1 bg-menu"></div>
            </div>
            <span className="part-txt">Default</span>
          </div>
        </div>
        <div className="settings-col">
          <div className={`dashboard-icon d-flex gap-1 border rounded ${isNavExpanded.isSmall ? 'active' : ''}`} id="sidebarSmall" role='button' onClick={() => toggleNavExpanded('small')}>
            <div className="pb-4 pt-1 bg-menu">
              <div className="p-1 rounded-pill bg-nav mb-2"></div>
              <div className="ps-1 pt-1 bg-nav mb-1"></div>
              <div className="ps-1 pt-1 bg-nav mb-1"></div>
              <div className="ps-1 pt-1 bg-nav mb-1"></div>
            </div>
            <div className="w-100 d-flex flex-column justify-content-between">
              <div className="px-2 py-1 bg-menu"></div>
              <div className="px-2 py-1 bg-menu"></div>
            </div>
            <span className="part-txt">Small icon</span>
          </div>
        </div>
        <div className="settings-col">
        <div className={`dashboard-icon d-flex gap-1 border rounded ${isNavExpanded.hover ? 'active' : ''}`} id="hover" role='button' onClick={() => toggleNavExpanded('hover')}>
                  <div className="pb-4 pt-1 bg-menu">
                      <div className="p-1 rounded-pill bg-nav mb-2"></div>
                      <div className="ps-1 pt-1 bg-nav mb-1"></div>
                      <div className="ps-1 pt-1 bg-nav mb-1"></div>
                      <div className="ps-1 pt-1 bg-nav mb-1"></div>
                  </div>
                  <div className="w-100 d-flex flex-column justify-content-between">
                      <div className="px-2 py-1 bg-menu"></div>
                      <div className="px-2 py-1 bg-menu"></div>
                  </div>
                  <span className="part-txt">Expand on hover</span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default NavSizeSection;
