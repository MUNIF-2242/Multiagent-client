import React, { useContext } from "react";
import { DigiContext } from "../../context/DigiContext";
import Link from "next/link";

const ChatTopBar = () => {
  const {
    handleSearchInChat,
    searchInChat,
    handleShowVoiceCall,
    handleShowVideoCall,
    headerBtnOpen,
    handleHeaderBtn,
    headerRef,
  } = useContext(DigiContext);
  return (
    <div className="panel-body">
      <div className="chat-top-bar">
        <div className="user">
          <button className="back-to-all-chat btn-flush fs-14 d-md-none">
            <i className="fa-light fa-arrow-left"></i>
          </button>
          <div className="avatar">
            <img src="assets/images/avatar-2.png" alt="User" />
          </div>
          <div className="part-txt">
            <span className="user-name">Amelie Harris</span>
            <span className="active-status active">Active Now</span>
          </div>
        </div>
        <div className="chatting-panel-top-btns">
          <button
            className="btn btn-icon btn-outline-primary d-xxl-none"
            onClick={handleSearchInChat}
            id="searchMsg"
          >
            <i className="fa-light fa-magnifying-glass"></i>
          </button>
          <button
            className="btn btn-icon btn-outline-primary d-xxl-none"
            onClick={handleShowVoiceCall}
          >
            <i className="fa-light fa-phone"></i>
          </button>
          <button
            className="btn btn-icon btn-outline-primary d-xxl-none"
            onClick={handleShowVideoCall}
          >
            <i className="fa-light fa-video"></i>
          </button>
          <div className="digi-dropdown dropdown" ref={headerRef}>
            <button
              className={`btn btn-sm btn-icon btn-outline-primary  ${
                headerBtnOpen ? "show" : ""
              }`}
              onClick={handleHeaderBtn}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-regular fa-ellipsis"></i>
            </button>
            <ul
              className={`digi-dropdown-menu dropdown-menu dropdown-menu-sm dropdown-menu-end  ${
                headerBtnOpen ? "show" : ""
              }`}
            >
              <li className="p-0">
                <Link href="#" className="dropdown-item">
                  <span className="dropdown-icon">
                    <i className="fa-light fa-box-archive"></i>
                  </span>{" "}
                  Archive
                </Link>
              </li>
              <li className="p-0">
                <Link href="#" className="dropdown-item">
                  <span className="dropdown-icon">
                    <i className="fa-light fa-microphone-slash"></i>
                  </span>{" "}
                  Mute
                </Link>
              </li>
              <li className="p-0">
                <Link href="#" className="dropdown-item">
                  <span className="dropdown-icon">
                    <i className="fa-light fa-trash-can"></i>
                  </span>{" "}
                  Delete
                </Link>
              </li>
              <li className="p-0">
                <Link
                  href="#"
                  className="dropdown-item d-xxl-none show-chatting-info"
                >
                  <span className="dropdown-icon">
                    <i className="fa-light fa-ellipsis-vertical"></i>
                  </span>{" "}
                  More
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`search-in-chat ${searchInChat ? "active" : ""}`}>
          <input
            type="search"
            className="form-control"
            placeholder="Search message..."
          />
        </div>
      </div>
    </div>
  );
};

export default ChatTopBar;
