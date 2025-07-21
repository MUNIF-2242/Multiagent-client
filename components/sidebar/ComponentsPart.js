import { useContext, useEffect } from "react";
import { DigiContext } from "../../context/DigiContext";
import NavLink from "../router/NavLink";

const ComponentsPart = () => {
  const {
    componentState,
    toggleComponentMainDropdown,
    layoutPosition,
    dropdownOpen,
    mainComponentRef,
    isExpanded,
    isNavExpanded,
    isSmallScreen,
  } = useContext(DigiContext);

  const { isMainDropdownOpen } = componentState;

  const shouldSetRef =
    isExpanded ||
    isNavExpanded.isSmall ||
    layoutPosition.horizontal ||
    (layoutPosition.twoColumn && (isExpanded || isSmallScreen));

  useEffect(() => {
    localStorage.setItem("componentState", JSON.stringify(componentState));
  }, [componentState]);

  return (
    <li className="sidebar-item" ref={shouldSetRef ? mainComponentRef : null}>
      <a
        role="button"
        className={`sidebar-link-group-title has-sub ${
          isMainDropdownOpen ? "show" : ""
        }`}
        onClick={toggleComponentMainDropdown}
      >
        AWS
      </a>
      <ul
        className={`sidebar-link-group ${
          layoutPosition.horizontal
            ? dropdownOpen.component
              ? "d-block"
              : ""
            : isMainDropdownOpen
            ? "d-none"
            : ""
        }`}
      >
        <li className="sidebar-dropdown-item">
          <NavLink
            href="/aws/label_detection/profile-image"
            className="sidebar-link"
          >
            <span className="nav-icon">
              <i className="fa-light fa-table"></i>
            </span>
            <span className="sidebar-txt">Detect Labels</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink
            href="/aws/bedrock/knowledgebase/knowlwdgebase-chat"
            className="sidebar-link"
          >
            <span className="nav-icon">
              <i className="fa-light fa-table"></i>
            </span>
            <span className="sidebar-txt">Bedrock Knowledgebase</span>
          </NavLink>
        </li>
      </ul>
    </li>
  );
};

export default ComponentsPart;
