import React, { useContext, useState } from "react";
import { DigiContext } from "../../../context/DigiContext";

const MainBackgroundSection = () => {
  const {
    resetBackground,
    handleBackgroundChange,
    handleRightSideDropdownToggle,
    rightSideDropdown,
  } = useContext(DigiContext);
  const [showBackgroundBox, setShowBackgroundBox] = useState(
    rightSideDropdown.mainBackground
  );

  const handleToggle = () => {
    handleRightSideDropdownToggle("mainBackground");
    setShowBackgroundBox((prevState) => !prevState);
  };

  return (
    <div className="right-sidebar-group">
      <span className="sidebar-subtitle">
        Main Background{" "}
        <span>
          <i
            className={`fa-light ${
              rightSideDropdown.mainBackground ? "fa-angle-up" : "fa-angle-down"
            }`}
            role="button"
            onClick={handleToggle}
          ></i>
        </span>
      </span>
      <div>
        <div
          className={`main-content-bg-btn-box ${
            showBackgroundBox ? "show" : "hide"
          }`}
        >
          <button id="noBackground2" onClick={resetBackground}>
            <span>
              <i className="fa-light fa-xmark"></i>
            </span>
          </button>
          <button
            className="main-content-bg-btn"
            onClick={() =>
              handleBackgroundChange("assets/images/main-bg-1.jpg")
            }
          >
            <img
              src="/assets/images/main-bg-1.jpg"
              height={60}
              width={100}
              alt="Background 1"
            />
          </button>
          <button
            className="main-content-bg-btn"
            onClick={() =>
              handleBackgroundChange("assets/images/main-bg-2.jpg")
            }
          >
            <img
              src="/assets/images/main-bg-2.jpg"
              height={60}
              width={100}
              alt="Background 2"
            />
          </button>
          <button
            className="main-content-bg-btn"
            onClick={() =>
              handleBackgroundChange("assets/images/main-bg-3.jpg")
            }
          >
            <img
              src="/assets/images/main-bg-3.jpg"
              height={60}
              width={100}
              alt="Background 3"
            />
          </button>
          <button
            className="main-content-bg-btn"
            onClick={() =>
              handleBackgroundChange("assets/images/main-bg-4.jpg")
            }
          >
            <img
              src="/assets/images/main-bg-4.jpg"
              height={60}
              width={100}
              alt="Background 4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBackgroundSection;
