import React, { useContext } from "react";
import { DigiContext } from "../../context/DigiContext";
import NavLink from "../router/NavLink";

const AppsPart = () => {
  const {
    state,
    toggleMainDropdown,
    toggleSubDropdown,
    layoutPosition,
    dropdownOpen,
    mainAppsDropdownRef,
    isExpanded,
    isNavExpanded,
    isSmallScreen,
  } = useContext(DigiContext);

  const { isMainDropdownOpen, isSubDropdownOpen } = state;

  const shouldSetRef =
    isExpanded ||
    isNavExpanded.isSmall ||
    layoutPosition.horizontal ||
    (layoutPosition.twoColumn && (isExpanded || isSmallScreen));

  const handleSubNavLinkClick = () => {
    if (!isSubDropdownOpen) {
      toggleSubDropdown();
    }
  };

  return (
    <li
      className="sidebar-item"
      ref={shouldSetRef ? mainAppsDropdownRef : null}
    >
      <a
        role="button"
        className={`sidebar-link-group-title has-sub ${
          isMainDropdownOpen ? "show" : ""
        }`}
        onClick={toggleMainDropdown}
      >
        Cloud Vision
      </a>
      <ul
        className={`sidebar-link-group ${
          layoutPosition.horizontal
            ? dropdownOpen.apps
              ? "d-block"
              : "d-none"
            : isMainDropdownOpen
            ? "d-none"
            : ""
        }`}
      >
        <li className="sidebar-dropdown-item">
          <NavLink
            href="/cloudvision/text_detection/tin-certtificate"
            className="sidebar-link"
            onClick={handleSubNavLinkClick}
          >
            <span className="nav-icon">
              <i className="fa-light fa-cart-shopping-fast"></i>
            </span>
            <span className="sidebar-txt">TIN Verify</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink
            href="/cloudvision/text_detection/vehicle/number-plate"
            className="sidebar-link"
          >
            <span className="nav-icon">
              <i className="fa-light fa-cart-shopping-fast"></i>
            </span>
            <span className="sidebar-txt">Vehicle Number Plate</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink
            href="/cloudvision/text_detection/nid/nid-back"
            className="sidebar-link"
          >
            <span className="nav-icon">
              <i className="fa-light fa-cart-shopping-fast"></i>
            </span>
            <span className="sidebar-txt">NID BACK</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink
            href="/cloudvision/text_detection/trade/trade-license"
            className="sidebar-link"
          >
            <span className="nav-icon">
              <i className="fa-light fa-cart-shopping-fast"></i>
            </span>
            <span className="sidebar-txt">Trade License</span>
          </NavLink>
        </li>
      </ul>
    </li>
  );
};

export default AppsPart;
