import React, { useContext } from "react";
import { DigiContext } from "../../context/DigiContext";
import NavPositionSection from "./right-sidebar/NavPositionSection";
import PrimaryColorSection from "./right-sidebar/PrimaryColorSection";
import ThemeColorSection from "./right-sidebar/ThemeColorSection";
import NavSizeSection from "./right-sidebar/NavSizeSection";
import SidebarBackgroundSection from "./right-sidebar/SidebarBackgroundSection";
import MainBackgroundSection from "./right-sidebar/MainBackgroundSection";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import LayoutDirection from "./right-sidebar/LayoutDirection";

const RightSidebar = () => {
  const { isSettingsOpen, handleSettingsToggle, containerRef, layoutPosition } =
    useContext(DigiContext);

  return (
    <div
      className={`right-sidebar ${isSettingsOpen ? "active" : ""}`}
      ref={containerRef}
    >
      <button className="right-bar-close" onClick={handleSettingsToggle}>
        <i className="fa-light fa-angle-right"></i>
      </button>
      <div className="sidebar-title">
        <h3>Layout Settings</h3>
      </div>
      <OverlayScrollbarsComponent className="sidebar-body">
        <NavPositionSection />
        <LayoutDirection />
        <PrimaryColorSection />
        <ThemeColorSection />
        {layoutPosition.vertical || layoutPosition.flush ? (
          <NavSizeSection />
        ) : null}
        <SidebarBackgroundSection />
        <MainBackgroundSection />
      </OverlayScrollbarsComponent>
    </div>
  );
};

export default RightSidebar;
