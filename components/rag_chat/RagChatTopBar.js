import React, { useContext } from "react";
import { DigiContext } from "../../context/DigiContext";

const RagChatTopBar = () => {
  const {
    handleSearchInChat,
    searchInChat,
    handleShowVoiceCall,
    handleShowVideoCall,
  } = useContext(DigiContext);

  return (
    <div className="panel-body">
      <div className="chat-top-bar">
        <div className="user">
          <button className="back-to-all-chat btn-flush fs-14 d-md-none">
            <i className="fa-light fa-arrow-left"></i>
          </button>

          <div className="part-txt">
            <span className="user-name">User chat interface</span>
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

export default RagChatTopBar;
