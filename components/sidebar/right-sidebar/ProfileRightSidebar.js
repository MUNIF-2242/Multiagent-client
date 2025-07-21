import React, { useContext, useEffect, useRef } from "react";
import { DigiContext } from "../../../context/DigiContext";
import Link from "next/link";

const ProfileRightSidebar = () => {
    const {
        isProfileSidebarOpen,
        handleProfileSidebarClose,
        handleProfileDropdownCheckboxChange,
        handleProfileSidebarCheckboxChange
    } = useContext(DigiContext)
    const profileSidebarRef = useRef(null);

    // Effect to add event listener when the component mounts
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (profileSidebarRef.current && !profileSidebarRef.current.contains(event.target)) {
            handleProfileSidebarCheckboxChange();
          }
        };
      
        if (isProfileSidebarOpen.sidebar) {
          document.addEventListener('mousedown', handleClickOutside);
        }
      
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isProfileSidebarOpen.sidebar, handleProfileSidebarCheckboxChange]);
      
  return (
    <div className={`profile-right-sidebar ${isProfileSidebarOpen.sidebar ? 'active' : ''}`} ref={profileSidebarRef}>
      <button className="right-bar-close" onClick={handleProfileSidebarClose}>
        <i className="fa-light fa-angle-right"></i>
      </button>
      <div className="top-panel">
        <div className="profile-content scrollable">
          <ul>
            <li>
              <div className="dropdown-txt text-center">
                <p className="mb-0">John Doe</p>
                <span className="d-block">Web Developer</span>
                <div className="d-flex justify-content-center">
                  <div className="form-check pt-3">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    id="seeProfileAsDropdown"
                    checked={isProfileSidebarOpen.dropdown}
                    onChange={handleProfileDropdownCheckboxChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="seeProfileAsDropdown"
                    >
                      See as dropdown
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link className="dropdown-item" href="/profile">
                <span className="dropdown-icon">
                  <i className="fa-regular fa-circle-user"></i>
                </span>{" "}
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/chat">
                <span className="dropdown-icon">
                  <i className="fa-regular fa-message-lines"></i>
                </span>{" "}
                Message
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/task">
                <span className="dropdown-icon">
                  <i className="fa-regular fa-calendar-check"></i>
                </span>{" "}
                Taskboard
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                <span className="dropdown-icon">
                  <i className="fa-regular fa-circle-question"></i>
                </span>{" "}
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-panel">
        <div className="button-group">
          <Link href="/editProfile">
            <i className="fa-light fa-gear"></i>
            <span>Settings</span>
          </Link>
          <Link href="/login">
            <i className="fa-light fa-power-off"></i>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightSidebar;
