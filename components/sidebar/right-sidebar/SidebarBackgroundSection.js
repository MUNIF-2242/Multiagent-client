import React, { useContext, useState } from "react";
import { DigiContext } from "../../../context/DigiContext";

const SidebarBackgroundSection = () => {
  const {
    resetSidebarBackground,
    handleSidebarBackgroundChange,
    handleRightSideDropdownToggle,
    rightSideDropdown,
  } = useContext(DigiContext);
  const [showBackgroundBox, setShowBackgroundBox] = useState(
    rightSideDropdown.sideBackground
  );

  const handleToggle = () => {
    handleRightSideDropdownToggle("sideBackground");
    setShowBackgroundBox((prevState) => !prevState);
  };
  return (
    <div className="right-sidebar-group">
      <span className="sidebar-subtitle">
        Sidebar Background
        <span>
          <i
            className={`fa-light ${
              rightSideDropdown.sideBackground ? "fa-angle-up" : "fa-angle-down"
            }`}
            role="button"
            onClick={handleToggle}
          ></i>
        </span>
      </span>
      <div>
        <div
          className={`sidebar-bg-btn-box ${
            showBackgroundBox ? "show" : "hide"
          }`}
        >
          <button id="noBackground" onClick={resetSidebarBackground}>
            <span>
              <i className="fa-light fa-xmark"></i>
            </span>
          </button>
          <button
            className="sidebar-bg-btn"
            onClick={() =>
              handleSidebarBackgroundChange("assets/images/nav-bg-1.jpg")
            }
          >
            <img src="/assets/images/nav-bg-1.jpg" height={90} width={50} />
          </button>
          <button
            className="sidebar-bg-btn"
            onClick={() =>
              handleSidebarBackgroundChange("assets/images/nav-bg-2.jpg")
            }
          >
            <img src="/assets/images/nav-bg-2.jpg" height={90} width={50} />
          </button>
          <button
            className="sidebar-bg-btn"
            onClick={() =>
              handleSidebarBackgroundChange("assets/images/nav-bg-3.jpg")
            }
          >
            <img src="/assets/images/nav-bg-3.jpg" height={90} width={50} />
          </button>
          <button
            className="sidebar-bg-btn"
            onClick={() =>
              handleSidebarBackgroundChange("assets/images/nav-bg-4.jpg")
            }
          >
            <img src="/assets/images/nav-bg-4.jpg" height={90} width={50} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarBackgroundSection;
