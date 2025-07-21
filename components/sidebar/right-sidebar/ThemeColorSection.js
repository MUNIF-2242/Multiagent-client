import React, { useContext, useState } from "react";
import { DigiContext } from "../../../context/DigiContext";

const ThemeColorSection = () => {
  const {
    handleLightThemeToggle,
    handleDarkThemeToggle,
    isLightTheme,
    isDarkTheme,
    handleResetTheme,
    handleRightSideDropdownToggle,
    rightSideDropdown,
  } = useContext(DigiContext);
  const [showBackgroundBox, setShowBackgroundBox] = useState(
    rightSideDropdown.themeColor
  );

  const handleToggle = () => {
    handleRightSideDropdownToggle("themeColor");
    setShowBackgroundBox((prevState) => !prevState);
  };

  return (
    <div className="right-sidebar-group">
      <span className="sidebar-subtitle">
        Theme Color{" "}
        <span>
          <i
            className={`fa-light ${
              rightSideDropdown.themeColor ? "fa-angle-up" : "fa-angle-down"
            }`}
            role="button"
            onClick={handleToggle}
          ></i>
        </span>
      </span>
      <div className={`settings-row ${showBackgroundBox ? "show" : "hide"}`}>
        <div className="settings-col">
          <div
            className={`dashboard-icon d-flex bg-blue-theme gap-1 border rounded ${
              !isLightTheme && !isDarkTheme ? "active" : ""
            }`}
            role="button"
            onClick={!isLightTheme && !isDarkTheme ? null : handleResetTheme}
            id="blueTheme"
          >
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
            <span className="part-txt">Blue Theme</span>
          </div>
        </div>
        <div className="settings-col">
          <div
            className={`dashboard-icon d-flex gap-1 border rounded bg-body-secondary light-theme-btn ${
              isLightTheme ? "active" : ""
            }`}
            role="button"
            onClick={isLightTheme ? null : handleLightThemeToggle}
            id="lightTheme"
          >
            <div className="pb-4 px-1 pt-1 bg-dark-subtle">
              <div className="px-2 py-1 rounded-pill bg-primary mb-2"></div>
              <div className="px-2 pt-1 bg-primary mb-1"></div>
              <div className="px-2 pt-1 bg-primary mb-1"></div>
              <div className="px-2 pt-1 bg-primary mb-1"></div>
            </div>
            <div className="w-100 d-flex flex-column justify-content-between">
              <div className="px-2 py-1 bg-dark-subtle"></div>
              <div className="px-2 py-1 bg-dark-subtle"></div>
            </div>
            <span className="part-txt">Light Theme</span>
          </div>
        </div>
        <div className="settings-col">
          <div
            className={`dashboard-icon d-flex gap-1 border rounded bg-dark ${
              isDarkTheme ? "active" : ""
            }`}
            onClick={isDarkTheme ? null : handleDarkThemeToggle}
            id="darkTheme"
          >
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
            <span className="part-txt">Dark Theme</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeColorSection;
