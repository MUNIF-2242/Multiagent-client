import React, { useContext } from "react";
import { DigiContext } from "../../context/DigiContext";

import HeaderProfile from "./HeaderProfile";

import Link from "next/link";
const Header = () => {
  const {
    isExpanded,
    toggleNav,
    isFullscreen,
    handleFullscreen,
    isLightTheme,
    handleLightThemeToggle,
    handleSettingsToggle,
    isNavExpanded,
    toggleSidebar,
    isSmallScreen,
    ref,
    mobileHeaderBtn,
    handleMobileHeaderBtn,
  } = useContext(DigiContext);
  return (
    <div
      className={`header ${
        isNavExpanded.isSmall && !isExpanded
          ? "expanded"
          : isExpanded && isNavExpanded.reset
          ? "expanded"
          : ""
      } ${isNavExpanded.reset && isExpanded ? "reset" : ""} ${
        mobileHeaderBtn ? "expanded-in-mobile" : ""
      } ${isNavExpanded.hoverOpen && isNavExpanded.hover ? "expanded" : ""}
        `}
    >
      <div className="row g-0 align-items-center">
        <div className="col-xxl-6 col-xl-5 col-4 d-flex align-items-center gap-20">
          <div className="main-logo d-lg-block d-none">
            <div className="logo-big">
              <Link href="/">
                <img
                  src={`${
                    isLightTheme
                      ? "/assets/images/ai-projects-logo.png"
                      : "/assets/images/ai-projects-logo-dark.png"
                  }`}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="logo-small">
              <Link href="/">
                <img src="/assets/images/openailogin.jpg" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="nav-close-btn" ref={ref}>
            {isSmallScreen ? (
              <button className="small" onClick={toggleSidebar}>
                <i className="fa-light fa-bars-sort"></i>
              </button>
            ) : (
              <button onClick={toggleNav}>
                <i className="fa-light fa-bars-sort"></i>
              </button>
            )}
          </div>
          {/* <Link href  ="#" target="_blank" className="btn btn-sm btn-primary site-view-btn"><i className="fa-light fa-globe me-1"></i> <span>View Website</span></Link> */}
        </div>
        <div className="col-4 d-lg-none">
          {isLightTheme ? (
            <div className="mobile-logo">
              <Link href="/">
                <img src="/assets/images/ai-projects-logo.png" alt="Logo" />
              </Link>
            </div>
          ) : (
            <div className="mobile-logo">
              <Link href="/">
                <img src="/assets/images/ai-projects-logo.png" alt="Logo" />
              </Link>
            </div>
          )}
        </div>
        <div className="col-xxl-6 col-xl-7 col-lg-8 col-4">
          <div className="header-right-btns d-flex justify-content-end align-items-center">
            <div
              className={`header-collapse-group ${
                mobileHeaderBtn ? "d-block" : ""
              }`}
            >
              <div className="header-right-btns d-flex justify-content-end align-items-center p-0">
                {/* <form className="header-form">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search..."
                    required
                  />
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form> */}
                <div className="header-right-btns d-flex justify-content-end align-items-center p-0">
                  {/* <div className="lang-select">
                    <span>Language:</span>
                    <select>
                      <option value="">EN</option>
                      <option value="">BN</option>
                     
                    </select>
                  </div> */}
                  {/* <HeaderChat />
                  <HeaderNotification />
                  <Calculator /> */}
                  {/* <Calculator /> */}
                  <button
                    className="header-btn fullscreen-btn"
                    id="btnFullscreen"
                    onClick={handleFullscreen}
                  >
                    <i
                      className={`fa-light ${
                        isFullscreen ? "fa-compress" : "fa-expand"
                      }`}
                    ></i>
                  </button>
                  <button
                    className="header-btn theme-color-btn"
                    onClick={handleLightThemeToggle}
                  >
                    <i
                      className={`fa-light ${
                        isLightTheme ? "fa-cloud-moon" : "fa-sun-bright"
                      }`}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
            <button
              className="header-btn header-collapse-group-btn d-lg-none"
              onClick={handleMobileHeaderBtn}
            >
              <i className="fa-light fa-ellipsis-vertical"></i>
            </button>
            <button
              className="header-btn theme-settings-btn d-lg-none"
              onClick={handleSettingsToggle}
            >
              <i className="fa-light fa-gear"></i>
            </button>
            <HeaderProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
