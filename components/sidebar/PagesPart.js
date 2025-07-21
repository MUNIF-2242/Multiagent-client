import { useContext } from "react";
import { DigiContext } from "../../context/DigiContext";
import NavLink from "../router/NavLink";

const PagesPart = () => {
  const {
    pagesState,
    toggleMainPagesDropdown,
    layoutPosition,
    dropdownOpen,
    mainPagesRef,
    isExpanded,
    isNavExpanded,
    isSmallScreen,
  } = useContext(DigiContext);
  const { isMainDropdownOpen } = pagesState;

  // Helper function to determine if dropdown should be visible
  const isDropdownVisible = () => {
    if (layoutPosition.horizontal) {
      return dropdownOpen.pages;
    }
    return isMainDropdownOpen;
  };

  return (
    <>
      <li
        className="sidebar-item"
        ref={
          isExpanded ||
          isNavExpanded.isSmall ||
          layoutPosition.horizontal ||
          (layoutPosition.twoColumn && isExpanded) ||
          (layoutPosition.twoColumn && isSmallScreen)
            ? mainPagesRef
            : null
        }
      >
        <a
          role="button"
          className={`sidebar-link-group-title has-sub ${
            isMainDropdownOpen ? "show" : ""
          }`}
          onClick={toggleMainPagesDropdown}
        >
          Pages
        </a>
        <ul
          className={`sidebar-link-group ${
            isDropdownVisible() ? "d-block" : "d-none"
          }`}
        >
          {/* <li className="sidebar-dropdown-item">
            <NavLink
              href="/openai/projects/pdf-book-summariser"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>{" "}
              <span className="sidebar-txt">Pdf Book Summariser </span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/openai/projects/live-weather-app"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>{" "}
              <span className="sidebar-txt">Live Weather app</span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/openai/projects/athlete-chatbot"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>{" "}
              <span className="sidebar-txt">Athlete Chatbot</span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/openai/projects/embeddings-similarity"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>{" "}
              <span className="sidebar-txt">Embeddings Similarity</span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/openai/projects/dalle/create-image"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>{" "}
              <span className="sidebar-txt">Dalle Create Image</span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/openai/projects/talk-with-pdf"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>
              <span className="sidebar-txt">Talk with pdf</span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink href="/mixed/og-app" className="sidebar-link">
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>
              <span class="sidebar-txt">OG</span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/id-verification/nid-extract"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>
              <span className="sidebar-txt">NID</span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/id-verification/birth-extract"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-layer-group"></i>
              </span>
              <span className="sidebar-txt">BIRTH</span>
            </NavLink>
          </li> */}
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/openai/projects/rag/knowlwdgebase-chat"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-comments-question-check"></i>
              </span>
              <span className="sidebar-txt">Chat</span>
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink
              href="/openai/projects/rag/addNewProduct"
              className="sidebar-link"
            >
              <span className="nav-icon">
                <i className="fa-light fa-folder-plus"></i>
              </span>
              <span className="sidebar-txt">Add New KnowledgeBase</span>
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
};

export default PagesPart;
