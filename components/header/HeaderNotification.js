import React, { useContext, useEffect, useRef } from 'react';
import Link from 'next/link'
import { DigiContext } from '../../context/DigiContext';

const HeaderNotification = () => {
    const {isNotificationDropdownOpen,toggleNotificationDropdown} = useContext(DigiContext);
    const notificationDropdownRef = useRef(null);

    useEffect(()=> {
      const handleClickOutside = (event) => {
        if ( notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
          toggleNotificationDropdown();
        }
      };

      if (isNotificationDropdownOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isNotificationDropdownOpen, toggleNotificationDropdown])
  return (
    <div className="header-btn-box" ref={notificationDropdownRef}>
      <button
        className={`header-btn ${isNotificationDropdownOpen? 'show':''}`}
        id="notificationDropdown"
        data-bs-toggle="dropdown"
        aria-expanded={isNotificationDropdownOpen}
        onClick={toggleNotificationDropdown}
      >
        <i className="fa-light fa-bell"></i>
        <span className="badge bg-danger">9+</span>
      </button>
      <ul
        className={`notification-dropdown dropdown-menu ${
          isNotificationDropdownOpen ? 'show' : ''
        }`}
        aria-labelledby="notificationDropdown"
      >
        <li>
          <Link href="#" className="d-flex align-items-center">
            <div className="avatar">
              <img src="assets/images/avatar.png" alt="image" />
            </div>
            <div className="notification-txt">
              <span className="notification-icon text-primary">
                <i className="fa-solid fa-thumbs-up"></i>
              </span>{' '}
              <span className="fw-bold">Archer</span> Likes your post
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" className="d-flex align-items-center">
            <div className="avatar">
              <img src="assets/images/avatar-2.png" alt="image" />
            </div>
            <div className="notification-txt">
              <span className="notification-icon text-success">
                <i className="fa-solid fa-comment-dots"></i>
              </span>{' '}
              <span className="fw-bold">Cody</span> Commented on your post
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" className="d-flex align-items-center">
            <div className="avatar">
              <img src="assets/images/avatar-3.png" alt="image" />
            </div>
            <div className="notification-txt">
              <span className="notification-icon">
                <i className="fa-solid fa-share"></i>
              </span>{' '}
              <span className="fw-bold">Zane</span> Shared your post
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" className="d-flex align-items-center">
            <div className="avatar">
              <img src="assets/images/avatar-4.png" alt="image" />
            </div>
            <div className="notification-txt">
              <span className="notification-icon text-primary">
                <i className="fa-solid fa-thumbs-up"></i>
              </span>{' '}
              <span className="fw-bold">Christopher</span> Likes your post
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" className="d-flex align-items-center">
            <div className="avatar">
              <img src="assets/images/avatar-5.png" alt="image" />
            </div>
            <div className="notification-txt">
              <span className="notification-icon text-success">
                <i className="fa-solid fa-comment-dots"></i>
              </span>{' '}
              <span className="fw-bold">Charlie</span> Commented on your post
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" className="d-flex align-items-center">
            <div className="avatar">
              <img src="assets/images/avatar-6.png" alt="image" />
            </div>
            <div className="notification-txt">
              <span className="notification-icon">
                <i className="fa-solid fa-share"></i>
              </span>{' '}
              <span className="fw-bold">Jayden</span> Shared your post
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" className="show-all-btn">
            Show all message
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNotification;
