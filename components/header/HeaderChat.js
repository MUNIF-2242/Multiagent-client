import React, { useContext, useRef, useEffect } from 'react';
import Link from 'next/link'
import { DigiContext } from '../../context/DigiContext';

const HeaderChat = () => {
  const { isChatDropdownOpen, toggleChatDropdown } = useContext(DigiContext);
  const chatDropdownRef = useRef(null);

  // Effect to add event listener when the component mounts
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatDropdownRef.current && !chatDropdownRef.current.contains(event.target)) {
        toggleChatDropdown();
      }
    };

    if (isChatDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatDropdownOpen, toggleChatDropdown]);

  return (
      <div className="header-btn-box" ref={chatDropdownRef}>
        <button
          className={`header-btn ${isChatDropdownOpen? 'show':''}`}
          id="messageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded={isChatDropdownOpen}
          onClick={toggleChatDropdown}
        >
          <i className="fa-light fa-comment-dots"></i>
          <span className="badge bg-danger">3</span>
        </button>
        <ul
          className={`message-dropdown dropdown-menu ${
            isChatDropdownOpen ? 'show' : ''
          }`}
          aria-labelledby="messageDropdown"
        >
          <li>
            <Link href="#" className="d-flex">
              <div className="avatar">
                <img src="assets/images/avatar.png" alt="image" />
              </div>
              <div className="msg-txt">
                <span className="name">Archer Cowie</span>
                <span className="msg-short">
                  There are many variations of passages of Lorem Ipsum.
                </span>
                <span className="time">2 Hours ago</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex">
              <div className="avatar">
                <img src="assets/images/avatar-2.png" alt="image" />
              </div>
              <div className="msg-txt">
                <span className="name">Cody Rodway</span>
                <span className="msg-short">
                  There are many variations of passages of Lorem Ipsum.
                </span>
                <span className="time">2 Hours ago</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex">
              <div className="avatar">
                <img src="assets/images/avatar-3.png" alt="image" />
              </div>
              <div className="msg-txt">
                <span className="name">Zane Bain</span>
                <span className="msg-short">
                  There are many variations of passages of Lorem Ipsum.
                </span>
                <span className="time">2 Hours ago</span>
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

export default HeaderChat;
