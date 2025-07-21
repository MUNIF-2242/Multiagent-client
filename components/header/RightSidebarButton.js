import React, { useContext } from "react";
import { DigiContext } from "../../context/DigiContext";

const RightSidebarButton = () => {
  const { handleSettingsToggle } = useContext(DigiContext);
  return (
    <div className="right-sidebar-btn d-lg-block d-none">
      {/* <button 
        className="header-btn theme-settings-btn"
        onClick={handleSettingsToggle}
        >
            <i className="fa-light fa-gear"></i>
        </button> */}
    </div>
  );
};

export default RightSidebarButton;
