import React, { createContext, useEffect, useRef, useState } from "react";
import { audienceData, emailData } from "../data/Data";
import { toast } from "react-toastify";
const DigiContext = createContext();

const DigiContextProvider = ({ children }) => {
  //dropdown buttons
  const [isChatDropdownOpen, setChatDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);

  const toggleChatDropdown = () => {
    setChatDropdownOpen((prevState) => !prevState);
    setNotificationDropdownOpen(false);
    setIsProfileSidebarOpen({
      dropdown: false,
    });
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen((prevState) => !prevState);
    setChatDropdownOpen(false);
    setIsProfileSidebarOpen({
      dropdown: false,
    });
  };

  //full screen
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    const element = document.documentElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullscreen((prevIsFullscreen) => !prevIsFullscreen);
  };

  //theme button
  // Theme Selection
  const [themeSelection, setThemeSelection] = useState({
    default: true,
    light: false,
    dark: false,
  });

  const handleThemeSelection = (selectedTheme) => {
    setThemeSelection((prevThemeSelection) => ({
      ...prevThemeSelection,
      default: false,
      light: false,
      dark: false,
      [selectedTheme]: true,
    }));
  };
  // Nav size filter
  const [isNavExpanded, setIsNavExpanded] = useState({
    reset: true,
    isSmall: false,
    hover: false,
    hoverOpen: false,
  });

  const toggleNavExpanded = (navSize) => {
    setIsNavExpanded((prevState) => ({
      ...prevState,
      reset: false,
      isSmall: navSize === "small" ? !prevState.isSmall : false,
      hover: navSize === "hover" ? !prevState.hover : false,
      hoverOpen: false,
    }));
    setDashState({
      isMainDropdownOpen: false,
    });
    setState({
      isMainDropdownOpen: false,
    });
    setComponentState({
      isMainDropdownOpen: false,
    });
    setPagesState({
      isMainDropdownOpen: false,
    });
    setIsExpanded(false);
  };

  const resetNavSize = () => {
    setIsNavExpanded({
      reset: true,
      isSmall: false,
      hover: false,
    });
    setDashState({
      isMainDropdownOpen: false,
    });
    setState({
      isMainDropdownOpen: false,
    });
    setComponentState({
      isMainDropdownOpen: false,
    });
    setPagesState({
      isMainDropdownOpen: false,
    });
    setIsExpanded(false);
  };
  const closeAllDropdown = () => {
    setState({
      isCrmDropdownOpen: false,
      isHrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
    });
    setComponentState({
      advance: false,
      multipleLevel: false,
    });
    setPagesState({
      authentication: false,
      user: false,
      error: false,
      additional: false,
    });
  };
  const handleNavHover = () => {
    setIsNavExpanded((prevState) => ({
      ...prevState,
      hoverOpen: false,
    }));
  };

  const handleNavHoverEnd = () => {
    setIsNavExpanded((prevState) => ({
      ...prevState,
      hoverOpen: true,
    }));
    closeAllDropdown();
  };

  // Nav position
  const [layoutPosition, setLayoutPosition] = useState({
    vertical: true,
    horizontal: false,
    twoColumn: false,
    flush: false,
  });

  const handleLayoutPosition = (id) => {
    setLayoutPosition((prevCheckboxes) => {
      const updatedCheckboxes = {
        ...Object.fromEntries(
          Object.entries(prevCheckboxes).map(([key]) => [key, false])
        ),
        [id]: !prevCheckboxes[id],
      };

      if (updatedCheckboxes.horizontal) {
        setIsNavExpanded((prevState) => ({
          ...prevState,
          isSmall: false,
          reset: true,
          hover: false,
          hoverOpen: false,
        }));
        setIsExpanded(false);
      }

      return updatedCheckboxes;
    });
  };

  const [dropdownOpen, setDropdownOpen] = useState({
    dashboard: false,
    apps: false,
    pages: false,
    component: false,
  });

  const handleDropdownClick = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...Object.keys(prevState).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {}
      ),
      [dropdown]: !prevState[dropdown], // Toggle the value of the targeted dropdown
    }));
  };

  // Light Theme
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleLightThemeToggle = () => {
    setThemeSelection({ default: false, dark: false, light: (prev) => !prev });
    setIsDarkTheme(false);
    setIsLightTheme((prev) => !prev);
    const bodyElement = document.body;
    const divElement = document.querySelector(".body-padding");
    bodyElement.classList.toggle("light-theme");

    if (
      bodyElement.classList.contains("dark-theme") &&
      divElement.classList.contains("dark-theme")
    ) {
      bodyElement.classList.remove("dark-theme");
      divElement.classList.remove("dark-theme");
      divElement.classList.toggle("light-theme");
    } else if (divElement.classList.contains("blue-theme")) {
      divElement.classList.remove("blue-theme");
      divElement.classList.toggle("light-theme");
    } else {
      divElement.classList.remove("light-theme");
    }

    handleThemeSelection("light");
  };

  // Dark Theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleDarkThemeToggle = () => {
    setIsLightTheme(false);
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);

    bodyElement.classList.toggle("dark-theme");
    divElement.classList.toggle("dark-theme");

    if (bodyElement.classList.contains("light-theme")) {
      bodyElement.classList.remove("light-theme");
    }
    if (divElement.classList.contains("light-theme")) {
      divElement.classList.remove("light-theme");
    }
    if (divElement.classList.contains("blue-theme")) {
      divElement.classList.remove("blue-theme");
    }

    handleThemeSelection("dark");
  };

  // Reset or Default Theme
  const handleResetTheme = () => {
    setIsLightTheme(false);
    setIsDarkTheme(false);
    const bodyElement = document.body;
    const divElement = document.querySelector(".body-padding.body-p-top");

    bodyElement.classList.remove("light-theme", "dark-theme");
    divElement.classList.remove("light-theme", "dark-theme");
    divElement.classList.add("blue-theme");

    handleThemeSelection("default");
  };

  //Settings button
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSettingsToggle = () => {
    setSettingsOpen((prevIsSettingsOpen) => !prevIsSettingsOpen);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setSettingsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Header Button
  const [headerBtnOpen, setHeaderBtnOpen] = useState(false);
  const handleHeaderBtn = () => {
    setHeaderBtnOpen(!headerBtnOpen);
  };
  const handleHeaderReset = () => {
    setHeaderBtnOpen(false);
  };

  const headerRef = useRef(null);

  // This function will be called when a click happens outside the component
  const handleOutsideClick = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setHeaderBtnOpen(false);
    }
  };

  // Use the useEffect hook to attach the event listener on component mount
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Table dropdown btn
  const [tableFilterBtnOpen, setTableFilterBtnOpen] = useState(false);
  const handleTableFilterBtn = () => {
    setTableFilterBtnOpen(!tableFilterBtnOpen);
  };
  const handleTableFilterReset = () => {
    setTableFilterBtnOpen(false);
  };

  const tableFilterRef = useRef(null);

  // This function will be called when a click happens outside the component
  const handleTableOutsideClick = (event) => {
    if (
      tableFilterRef.current &&
      !tableFilterRef.current.contains(event.target)
    ) {
      setTableFilterBtnOpen(false);
    }
  };

  // Use the useEffect hook to attach the event listener on component mount
  useEffect(() => {
    document.addEventListener("click", handleTableOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleTableOutsideClick);
    };
  }, []);

  // Pagination and Switch Checkbox
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [dataList, setDataList] = useState(audienceData);

  const handleCheckboxChange = (index) => {
    const updatedDataList = [...dataList];
    updatedDataList[indexOfFirstData + index].isChecked =
      !updatedDataList[indexOfFirstData + index].isChecked;
    setDataList(updatedDataList);
  };

  // Pagination logic
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dataList.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(dataList.length / dataPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Scroll
  const [scrollbarPosition, setScrollbarPosition] = useState(0);

  const updateScrollbarPosition = (position) => {
    setScrollbarPosition(position);
  };

  // Add new task modal
  const [showAddNewTaskModal, setShowAddNewTaskModal] = useState(false);

  const handleShowAddNewTaskModal = () => {
    setShowAddNewTaskModal(true);
  };

  const handleCloseAddNewTaskModal = () => {
    setShowAddNewTaskModal(false);
  };

  // View task modal
  const [viewTaskModalOpen, setViewTaskModalOpen] = useState(false);

  const handleViewTaskModalShow = () => {
    setViewTaskModalOpen(true);
  };

  const handleViewTaskModalClose = () => {
    setViewTaskModalOpen(false);
  };

  // Dashboard part
  const initialDashState = {
    isMainDropdownOpen: false,
  };
  const [dashState, setDashState] = useState(initialDashState);
  // Use useEffect to set initial state from localStorage on the client side
  useEffect(() => {
    const storedDashState = localStorage.getItem("dashState");
    if (storedDashState) {
      setDashState(JSON.parse(storedDashState));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const toggleMainDashDropdown = () => {
    setDashState((prevState) => {
      const updatedState = {
        ...prevState,
        isMainDropdownOpen: !prevState.isMainDropdownOpen,
        dropdownOpen: {
          dashboard: !prevState.isMainDropdownOpen ? true : false,
          apps: false,
          pages: false,
          component: false,
        },
      };

      handleDropdownClick("dashboard");

      return updatedState;
    });
  };
  const mainDashboardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mainDashboardRef.current &&
        !mainDashboardRef.current.contains(event.target)
      ) {
        // Close all dropdowns when clicking outside
        setDropdownOpen({
          dashboard: false,
          apps: false,
          pages: false,
          component: false,
        });
      }
    };

    if (dropdownOpen.dashboard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen.dashboard]);

  // Apps part dropdowns

  // Retrieve the initial state from localStorage or set it to false
  const initialState = {
    isMainDropdownOpen: true,
    isCrmDropdownOpen: false,
    isHrmDropdownOpen: false,
    isEcommerceDropdownOpen: false,
    isSubDropdownOpen: false,
  };
  const [state, setState] = useState(initialState);

  // Update the state when the NavLink is clicked
  const handleNavLinkClick = () => {
    setState({
      ...state,
      isMainDropdownOpen: false,
      isSubDropdownOpen: false,
    });
  };

  // Save the state to localStorage whenever it changes, on the client side
  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]); // This effect will only run on the client side when state changes

  // Modify toggleCrmDropdown function
  const toggleCrmDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isCrmDropdownOpen: !prevState.isCrmDropdownOpen,
      isHrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
      isSubDropdownOpen: !prevState.isCrmDropdownOpen,
    }));
    setComponentState({
      advance: false,
      multipleLevel: false,
    });
    setPagesState({
      authentication: false,
      user: false,
      error: false,
      additional: false,
    });
  };

  // Modify toggleHrmDropdown function
  const toggleHrmDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isHrmDropdownOpen: !prevState.isHrmDropdownOpen,
      isCrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
      isSubDropdownOpen: !prevState.isHrmDropdownOpen,
    }));
    setComponentState({
      advance: false,
      multipleLevel: false,
    });
    setPagesState({
      authentication: false,
      user: false,
      error: false,
      additional: false,
    });
  };

  // Modify toggleEcommerceDropdown function
  const toggleEcommerceDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isEcommerceDropdownOpen: !prevState.isEcommerceDropdownOpen,
      isCrmDropdownOpen: false,
      isHrmDropdownOpen: false,
      isSubDropdownOpen: !prevState.isEcommerceDropdownOpen,
    }));
    setComponentState({
      advance: false,
      multipleLevel: false,
    });
    setPagesState({
      authentication: false,
      user: false,
      error: false,
      additional: false,
    });
  };

  // No modifications needed for toggleMainDropdown function
  const toggleMainDropdown = () => {
    setState((prevState) => {
      const updatedState = {
        ...prevState,
        isMainDropdownOpen: !prevState.isMainDropdownOpen,
        dropdownOpen: {
          dashboard: false,
          pages: false,
          component: false,
          apps: !prevState.isMainDropdownOpen, // Toggle the 'apps' dropdown
        },
      };

      handleDropdownClick("apps");

      return updatedState;
    });
  };
  const mainAppsDropdownRef = useRef(null);

  // // Effect to add event listener when the component mounts
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mainAppsDropdownRef.current && // Check if the main wrapper ref is valid
        !mainAppsDropdownRef.current.contains(event.target) // Check if the click is outside the main wrapper
      ) {
        // Close all dropdowns when clicking outside
        setState((prevState) => ({
          ...prevState,
          isCrmDropdownOpen: false,
          isHrmDropdownOpen: false,
          isEcommerceDropdownOpen: false,
          isSubDropdownOpen: false,
        }));
        setComponentState({
          advance: false,
          multipleLevel: false,
        });
        setPagesState({
          authentication: false,
          user: false,
          error: false,
          additional: false,
        });
        setDropdownOpen({
          dashboard: false,
          apps: false,
          pages: false,
          component: false,
        });
        console.log("apps part outside click");
      }
    };

    if (
      state.isCrmDropdownOpen ||
      state.isHrmDropdownOpen ||
      state.isEcommerceDropdownOpen ||
      dropdownOpen.apps
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    state.isCrmDropdownOpen,
    state.isHrmDropdownOpen,
    state.isEcommerceDropdownOpen,
    dropdownOpen.apps,
  ]);

  // Components Part

  // Retrieve the initial state from localStorage or set it to false
  const initialComponentState = {
    isMainDropdownOpen: true,
    advance: false,
    multipleLevel: false,
    firstLevel: false,
    secondLevel: false,
    isSubComponentDropdownOpen: false,
  };

  const [componentState, setComponentState] = useState(initialComponentState);

  useEffect(() => {
    localStorage.setItem("componentState", JSON.stringify(componentState));
  }, [componentState]);

  const toggleComponentMainDropdown = () => {
    setComponentState((prevState) => {
      const updatedState = {
        ...prevState,
        isMainDropdownOpen: !prevState.isMainDropdownOpen,
        dropdownOpen: {
          dashboard: false,
          pages: false,
          apps: false,
          component: !prevState.isMainDropdownOpen, // Toggle the 'component' dropdown
        },
      };

      handleDropdownClick("component");

      return updatedState;
    });
  };

  const toggleAdvance = () => {
    setComponentState((prevState) => ({
      ...prevState,
      advance: !prevState.advance,
      multipleLevel: false,
      firstLevel: false,
      secondLevel: false,
      isSubComponentDropdownOpen: !prevState.advance,
    }));
    setState({
      isCrmDropdownOpen: false,
      isHrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
    });
    setPagesState({
      authentication: false,
      user: false,
      error: false,
      additional: false,
    });
  };

  const toggleMultipleLevel = () => {
    setComponentState((prevState) => ({
      ...prevState,
      multipleLevel: !prevState.multipleLevel,
      firstLevel: false,
      secondLevel: false,
      advance: false,
      isSubComponentDropdownOpen: !prevState.multipleLevel,
    }));
    setState({
      isCrmDropdownOpen: false,
      isHrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
    });
    setPagesState({
      authentication: false,
      user: false,
      error: false,
      additional: false,
    });
  };

  const toggleFirstLevel = () => {
    setComponentState((prevState) => ({
      ...prevState,
      firstLevel: !prevState.firstLevel,
      secondLevel: false,
      isSubComponentDropdownOpen: !prevState.firstLevel,
    }));
  };

  const toggleSecondLevel = () => {
    setComponentState((prevState) => ({
      ...prevState,
      secondLevel: !prevState.secondLevel,
      isSubComponentDropdownOpen: !prevState.secondLevel,
    }));
  };

  const toggleSubComponentDropdown = () => {
    setComponentState((prevState) => ({
      ...prevState,
      isSubComponentDropdownOpen: !prevState.isSubComponentDropdownOpen,
    }));
  };
  const mainComponentRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mainComponentRef.current &&
        !mainComponentRef.current.contains(event.target)
      ) {
        // Close all dropdowns when clicking outside
        setState((prevState) => ({
          ...prevState,
          isCrmDropdownOpen: false,
          isHrmDropdownOpen: false,
          isEcommerceDropdownOpen: false,
          isSubDropdownOpen: false,
        }));
        setComponentState({
          advance: false,
          multipleLevel: false,
        });
        setPagesState({
          authentication: false,
          user: false,
          error: false,
          additional: false,
        });
        setDropdownOpen({
          dashboard: false,
          apps: false,
          pages: false,
          component: false,
        });
        console.log("components part outside click");
      }
    };

    if (
      componentState.advance ||
      componentState.multipleLevel ||
      dropdownOpen.component
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    componentState.advance,
    componentState.multipleLevel,
    dropdownOpen.component,
  ]);

  // Pages part
  const initialPagesState = {
    isMainDropdownOpen: true,
    isSubDropdownOpen: false,
    authentication: false,
    error: false,
    user: false,
    additional: false,
  };

  const [pagesState, setPagesState] = useState(initialPagesState);

  useEffect(() => {
    localStorage.setItem("pagesState", JSON.stringify(pagesState));
  }, [pagesState]);

  const toggleMainPagesDropdown = () => {
    setPagesState((prevState) => {
      const updatedState = {
        ...prevState,
        isMainDropdownOpen: !prevState.isMainDropdownOpen,
        isSubDropdownOpen: false,
        dropdownOpen: {
          dashboard: false,
          apps: false,
          pages: !prevState.isMainDropdownOpen, // Toggle the 'pages' dropdown
          component: false,
        },
      };

      handleDropdownClick("pages");

      return updatedState;
    });
  };

  const toggleSubPagesDropdown = () => {
    setPagesState((prevState) => ({
      ...prevState,
      isSubDropdownOpen: !prevState.isSubDropdownOpen,
      isMainDropdownOpen: false,
    }));
  };

  const toggleAuthentication = () => {
    setPagesState((prevState) => ({
      ...prevState,
      authentication: !prevState.authentication,
      user: false,
      error: false,
      additional: false,
    }));
    setState({
      isCrmDropdownOpen: false,
      isHrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
    });
    setComponentState({
      advance: false,
      multipleLevel: false,
    });
  };

  const toggleUser = () => {
    setPagesState((prevState) => ({
      ...prevState,
      user: !prevState.user,
      authentication: false,
      error: false,
      additional: false,
    }));
    setState({
      isCrmDropdownOpen: false,
      isHrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
    });
    setComponentState({
      advance: false,
      multipleLevel: false,
    });
  };
  const toggleError = () => {
    setPagesState((prevState) => ({
      ...prevState,
      user: false,
      authentication: false,
      error: !prevState.error,
      additional: false,
    }));
    setState({
      isCrmDropdownOpen: false,
      isHrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
    });
    setComponentState({
      advance: false,
      multipleLevel: false,
    });
  };
  const toggleAdditional = () => {
    setPagesState((prevState) => ({
      ...prevState,
      user: false,
      authentication: false,
      error: false,
      additional: !prevState.additional,
    }));
    setState({
      isCrmDropdownOpen: false,
      isHrmDropdownOpen: false,
      isEcommerceDropdownOpen: false,
    });
    setComponentState({
      advance: false,
      multipleLevel: false,
    });
  };
  const mainPagesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mainPagesRef.current &&
        !mainPagesRef.current.contains(event.target)
      ) {
        // Close all dropdowns when clicking outside
        setState((prevState) => ({
          ...prevState,
          isCrmDropdownOpen: false,
          isHrmDropdownOpen: false,
          isEcommerceDropdownOpen: false,
          isSubDropdownOpen: false,
        }));
        setComponentState({
          advance: false,
          multipleLevel: false,
        });
        setPagesState({
          authentication: false,
          user: false,
          error: false,
          additional: false,
        });
        setDropdownOpen({
          dashboard: false,
          apps: false,
          pages: false,
          component: false,
        });
        console.log("pages part outside click");
      }
    };

    if (pagesState.authentication || pagesState.user || dropdownOpen.pages) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pagesState.authentication, pagesState.user, dropdownOpen.pages]);

  //nav button
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNav = () => {
    setIsExpanded((prevState) => !prevState);
    setDashState({
      isMainDropdownOpen: false,
    });
    setState({
      isMainDropdownOpen: false,
    });
    setComponentState({
      isMainDropdownOpen: false,
    });
    setPagesState({
      isMainDropdownOpen: false,
    });
  };
  // Search in Chat
  const [searchInChat, SetSearchInChat] = useState(false);
  const handleSearchInChat = () => {
    SetSearchInChat(!searchInChat);
  };

  // Password Visible
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // File upload modal
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const handleUploadModalShow = () => {
    setUploadModalOpen(true);
  };
  const handleUploadModalClose = () => {
    setUploadModalOpen(false);
  };

  // Create new folder modal
  const [newFolderModal, setNewFolderModal] = useState(false);
  const handleNewFolderModalClose = () => {
    setNewFolderModal(false);
  };
  const handleNewFolderModalOpen = () => {
    setNewFolderModal(true);
  };

  // file details modal
  const [fileDeatailsModalOpen, setFileDetailsModalOpen] = useState(false);

  const handleFileDetailsModalShow = () => {
    setFileDetailsModalOpen(true);
  };
  const handleFileDetailsModalClose = () => {
    setFileDetailsModalOpen(false);
  };

  // Permalink
  const [title, setTitle] = useState("");
  const [permalink, setPermalink] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    generatePermalink(event.target.value);
  };

  const generatePermalink = (value) => {
    const formattedTitle = value.toLowerCase().replace(/\s+/g, "-");
    setPermalink(`https://example.com/${formattedTitle}`);
  };

  const handleEditPermalink = () => {
    const editPermalinkInput = document.getElementById("editPermalink");
    editPermalinkInput.value = permalink;
    editPermalinkInput.hidden = false;
    document.getElementById("editPermaBtn").hidden = true;
    document.getElementById("createPerma").hidden = false;
    document.getElementById("cancelPerma").hidden = false;
  };

  const handleUpdatePermalink = () => {
    const updatedPermalink = document.getElementById("editPermalink").value;
    setPermalink(updatedPermalink);
    document.getElementById("editPermalink").hidden = true;
    document.getElementById("editPermaBtn").hidden = false;
    document.getElementById("createPerma").hidden = true;
    document.getElementById("cancelPerma").hidden = true;
  };

  const handleCancelPermalink = () => {
    document.getElementById("editPermalink").hidden = true;
    document.getElementById("editPermaBtn").hidden = false;
    document.getElementById("createPerma").hidden = true;
    document.getElementById("cancelPerma").hidden = true;
  };

  // Email page
  const [currentEmailPage, setCurrentEmailPage] = useState(1);
  const [dataPerEmailPage] = useState(10);
  const dataEmailList = emailData;

  // Pagination logic
  const indexOfLastEmailData = currentEmailPage * dataPerEmailPage;
  const indexOfFirstEmailData = indexOfLastEmailData - dataPerEmailPage;
  const currentEmailData = dataEmailList.slice(
    indexOfFirstEmailData,
    indexOfLastEmailData
  );

  const paginateEmail = (pageNumber) => {
    setCurrentEmailPage(pageNumber);
  };

  // Calculate total number of email pages
  const totalEmailPages = Math.ceil(dataEmailList.length / dataPerEmailPage);
  const emailPageNumbers = [];
  for (let i = 1; i <= totalEmailPages; i++) {
    emailPageNumbers.push(i);
  }

  // Mail details

  const [mailDetailsOpen, setMailDetailsOpen] = useState(false);

  const handleMailDetailsBtn = () => {
    setMailDetailsOpen(true);
  };
  const handleMailDetailClose = () => {
    setMailDetailsOpen(false);
  };

  // mail details modal
  const [showMailModal, setShowMailModal] = useState(false);

  const handleMailClose = () => setShowMailModal(false);
  const handleMailShow = () => setShowMailModal(true);
  // compose mail modal
  const [showComposeMail, setShowComposeMail] = useState(false);

  const handleComposeMailClose = () => setShowComposeMail(false);
  const handleComposeMailShow = () => setShowComposeMail(true);
  //main background image filter
  const [selectedBackground, setSelectedBackground] = useState("");

  const handleBackgroundChange = (backgroundUrl) => {
    setSelectedBackground(backgroundUrl);
  };

  const resetBackground = () => {
    setSelectedBackground("");
  };

  const backgroundImageStyle = {
    backgroundImage: selectedBackground ? `url(${selectedBackground})` : "none",
  };
  // sidebar background image filter
  const [selectedSidebarBackground, setSelectedSidebarBackground] =
    useState("");

  const handleSidebarBackgroundChange = (backgroundUrl) => {
    setSelectedSidebarBackground(backgroundUrl);
  };

  const resetSidebarBackground = () => {
    setSelectedSidebarBackground("");
  };

  const sidebarBackgroundImageStyle = {
    backgroundImage: selectedSidebarBackground
      ? `url(${selectedSidebarBackground})`
      : "none",
  };

  // right sidebar

  // Right Sidebar dropdowns
  const [rightSideDropdown, setRightSideDropdown] = useState({
    navPosition: true,
    primaryColor: true,
    themeColor: true,
    navSize: true,
    sideBackground: true,
    mainBackground: true,
  });

  const handleRightSideDropdownToggle = (dropdown) => {
    setRightSideDropdown((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  // Primary color selection
  const [primaryColor, setPrimaryColor] = useState({
    blue: true, // Set "blue" to true initially
    deep_pink: false,
    eagle_green: false,
    gold: false,
    green: false,
    orange: false,
    pink: false,
    purple: false,
    tea_green: false,
    yellow_green: false,
  });

  useEffect(() => {
    const primaryColorStylesheet = document.getElementById("primaryColor");
    const selectedColor = Object.keys(primaryColor).find(
      (color) => primaryColor[color]
    );

    if (primaryColorStylesheet) {
      primaryColorStylesheet.setAttribute(
        "href",
        `/assets/css/${selectedColor}-color.css`
      );
    }
  }, [primaryColor]);

  const handleColorSelectionToggle = (color) => {
    setPrimaryColor((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [key, false])
      ),
      [color]: true,
    }));
  };

  // Calender Code
  const [currentEvents, setCurrentEvents] = useState([]);
  const [addNewEventModal, setAddNewEventModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const calendarRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  let eventGuid = 0;
  const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

  const createEventId = () => {
    return String(eventGuid++);
  };

  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "All-day event",
      start: todayStr,
      classNames: "bg-info",
    },
    {
      id: createEventId(),
      title: "Timed event",
      start:
        new Date(new Date().setDate(new Date().getDate() + 3))
          .toISOString()
          .replace(/T.*$/, "") + "T12:00:00",
      classNames: "bg-primary",
    },
    {
      id: createEventId(),
      title: "Meeting",
      start: new Date(new Date().setDate(new Date().getDate() + 4))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-danger",
    },
    {
      id: createEventId(),
      title: "Conference",
      start: new Date(new Date().setDate(new Date().getDate() + 7))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-warning",
    },
    {
      id: createEventId(),
      title: "Team outing",
      start: new Date(new Date().setDate(new Date().getDate() + 10))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-info",
    },
    {
      id: createEventId(),
      title: "Workout",
      start: new Date(new Date().setDate(new Date().getDate() - 9))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-success",
    },
    {
      id: createEventId(),
      title: "Tour",
      start: new Date(new Date().setDate(new Date().getDate() + 12))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-info",
    },
    {
      id: createEventId(),
      title: "Online Meeting",
      start: new Date(new Date().setDate(new Date().getDate() - 7))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-warning",
    },
    {
      id: createEventId(),
      title: "Perfomance Review",
      start: new Date(new Date().setDate(new Date().getDate() - 10))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-info",
    },
    {
      id: createEventId(),
      title: "Work Schedule",
      start: new Date(new Date().setDate(new Date().getDate() - 12))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-success",
    },
    {
      id: createEventId(),
      title: "Spa",
      start: new Date(new Date().setDate(new Date().getDate() - 14))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-info",
    },
    {
      id: createEventId(),
      title: "Concert",
      start: new Date(new Date().setDate(new Date().getDate() - 16))
        .toISOString()
        .replace(/T.*$/, ""),
      classNames: "bg-primary",
    },
  ];

  const handleDateSelect = (selectInfo) => {
    selectInfo.view.calendar.unselect(); // clear date selection
    setSelectedDate(selectInfo.startStr);
    setAddNewEventModal(true);
  };
  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setDeleteConfirmationModal(true);
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const handleSaveEvent = (title, category) => {
    // Check if title is empty or null
    if (!title || title.trim() === "") {
      toast.error("Event title is required!");
      return;
    }

    // Adding a new event
    const newEvent = {
      id: createEventId(),
      title,
      start: selectedDate,
      classNames: category, // Set the classNames property
      allDay: true,
      extendedProps: {
        category,
      },
    };

    setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(newEvent);
    toast.success("A new event is created!");
  };

  const handleAddNewModalHide = () => {
    setAddNewEventModal(false);
    setSelectedEvent(null);
  };
  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };
  const handleDeleteEvent = (id) => {
    setCurrentEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== id)
    );
  };
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const handleDelete = () => {
    const calendarApi = calendarRef.current.getApi();
    selectedEvent.remove();
    calendarApi.unselect();
    toast.warning("The selected event deleted!");
  };

  const handleCloseDeleteConfirmationModal = () => {
    setDeleteConfirmationModal(false);
  };

  // mini sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the sidebar is open and the clicked element is not inside the sidebar
      if (
        isSidebarOpen &&
        !event.target.closest(".main-sidebar") &&
        !event.target.closest(".nav-close-btn")
      ) {
        setSidebarOpen(false);
      }
    };

    // Bind the event listener to detect clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, setSidebarOpen]);

  const [mobileHeaderBtn, setMobileHeaderBtn] = useState(false);

  const handleMobileHeaderBtn = () => {
    setMobileHeaderBtn(!mobileHeaderBtn);
  };

  // chat modal
  const [showVoiceCall, setShowVoiceCall] = useState(false);
  const handleCloseVoiceCall = () => {
    setShowVoiceCall(false);
  };
  const handleShowVoiceCall = () => {
    setShowVoiceCall(true);
  };
  const [showVideoCall, setShowVideoCall] = useState(false);
  const handleCloseVideoCall = () => {
    setShowVideoCall(false);
  };
  const handleShowVideoCall = () => {
    setShowVideoCall(true);
  };

  // React date range
  const [inputValue, setInputValue] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDateRangeChange = (ranges) => {
    setSelectedDateRange([ranges.selection]);
    const formattedStartDate = ranges.selection.startDate.toLocaleDateString();
    const formattedEndDate = ranges.selection.endDate.toLocaleDateString();
    setInputValue(`${formattedStartDate} - ${formattedEndDate}`);
  };

  const handleDateRangeSelection = () => {
    setShowDatePicker(!showDatePicker);
  };

  const dateRangeSelectionRef = useRef(null);
  useEffect(() => {
    // Function to handle outside clicks
    const handleClickOutside = (event) => {
      if (
        dateRangeSelectionRef.current &&
        !dateRangeSelectionRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // mobile email button
  const [mobileEmailBtn, setMobileEmailBtn] = useState(false);

  const handleMobileEmailBtn = () => {
    setMobileEmailBtn((prevMobileEmailBtn) => !prevMobileEmailBtn);
  };

  const emailRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the sidebar is open and the clicked element is not inside the sidebar
      if (
        mobileEmailBtn &&
        !event.target.closest(".panel-body.email-menu") &&
        !event.target.closest(".mobile-email-btn")
      ) {
        setMobileEmailBtn(false);
      }
    };

    // Bind the event listener to detect clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileEmailBtn]);

  // mobile File Manager button
  const [mobileFileManagerBtn, setMobileFileManagerBtn] = useState(false);

  const handleMobileFileManagerBtn = () => {
    setMobileFileManagerBtn(
      (prevMobileFileManagerBtn) => !prevMobileFileManagerBtn
    );
  };
  const fileManagerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the sidebar is open and the clicked element is not inside the sidebar
      if (
        mobileFileManagerBtn &&
        !event.target.closest(".file-manager-sidebar") &&
        !event.target.closest(".mobile-file-manager-btn")
      ) {
        setMobileFileManagerBtn(false);
      }
    };

    // Bind the event listener to detect clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileFileManagerBtn]);
  // small device
  const [smallDevice, setSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallDevice = window.innerWidth < 575;
      setSmallDevice(isSmallDevice);
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Below 1700px
  const [isBelowLg, setIsBelowLg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsBelowLg(windowWidth < 1700);
    };

    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // RTL view
  const [isRtl, setIsRtl] = useState(false);

  const handleRtlBtn = () => {
    setIsRtl(true);
  };

  const handleLtrBtn = () => {
    setIsRtl(false);
  };

  useEffect(() => {
    // Dynamically add or remove the RTL CSS file based on the state
    const head = document.head;
    const existingCssLinks = document.querySelectorAll("link[data-rtl]");

    if (isRtl) {
      // Add the RTL CSS file
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = "assets/css/rtl-style.css"; // Adjust the path to the CSS file as needed
      cssLink.setAttribute("data-rtl", "true");
      head.appendChild(cssLink);
    } else {
      // Remove any existing RTL CSS files
      existingCssLinks.forEach((link) => {
        head.removeChild(link);
      });
    }
  }, [isRtl]);

  // Rechart wrapper height

  const [isRechartHeight, setIsRechartHeight] = useState("");

  const setRechartHeight = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1800) {
      setIsRechartHeight("407px");
    } else if (screenWidth >= 1200 && screenWidth < 1800) {
      setIsRechartHeight("425px");
    } else if (screenWidth >= 992 && screenWidth < 1200) {
      setIsRechartHeight("369px");
    } else if (screenWidth >= 768 && screenWidth < 992) {
      setIsRechartHeight("365px");
    } else if (screenWidth >= 576 && screenWidth < 768) {
      setIsRechartHeight("350px");
    } else if (screenWidth >= 478 && screenWidth < 576) {
      setIsRechartHeight("354px");
    } else if (screenWidth >= 320 && screenWidth < 478) {
      setIsRechartHeight("250px");
    } else {
      setIsRechartHeight("250px");
    }
  };

  // Call setRechartHeight initially and add event listener to update the height on window resize
  useEffect(() => {
    setRechartHeight();

    const handleResize = () => {
      setRechartHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Ck Editor Next JS Dynamic Import
  const [editorVisible, setEditorVisible] = useState(true);
  const [editorData, setEditorData] = useState("");

  const handleEditorDataChange = (data) => {
    setEditorData(data);
  };

  useEffect(() => {
    return () => {
      // Clean up resources when the component is unmounted
      setEditorVisible(true); // Ensure editor is visible when component is re-mounted
      setEditorData(""); // Reset editor data
    };
  }, []);

  // Calculator Logic
  const calculatorRef = useRef(null); // Ref for the calculator dropdown

  const [calculatorShow, setCalculatorShow] = useState(false);

  const handleCalculator = () => {
    setCalculatorShow((prev) => !prev);
  };

  useEffect(() => {
    // Event listener for clicks outside the calculator dropdown
    const handleOutsideClick = (event) => {
      if (
        calculatorRef.current &&
        !calculatorRef.current.contains(event.target)
      ) {
        setCalculatorShow(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const [inputCalculator, setInputCalculator] = useState("");
  const [lastInputCalculatorIsSymbol, setLastInputCalculatorIsSymbol] =
    useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  // useEffect(() => {
  //   const handleKeydown = (e) => {
  //     const isInputField = e.target.id === "dgbCalcResult"; // Check if the event is coming from the input field with id 'dgbCalcResult'

  //     if (isInputField) {
  //       if (
  //         e.key === "=" ||
  //         e.key === "Enter" ||
  //         e.key === "Escape" ||
  //         (e.key >= "0" && e.key <= "9") ||
  //         ["+", "-", "*", "/"].includes(e.key)
  //       ) {
  //         e.preventDefault();

  //         if (e.key === "=" || e.key === "Enter") {
  //           handleEqual();
  //         } else if (e.key === "Escape") {
  //           setInputCalculator("");
  //         } else {
  //           handleInputCalculator(e.key);
  //         }
  //       }
  //     }
  //   };

  //   document
  //     .getElementById("dgbCalcResult")
  //     .addEventListener("keydown", handleKeydown);

  //   return () => {
  //     document
  //       .getElementById("dgbCalcResult")
  //       .removeEventListener("keydown", handleKeydown);
  //   };
  // }, [inputCalculator]);

  // const handleInputCalculator = (num) => {
  //   if (isSymbol(num) && lastInputCalculatorIsSymbol) {
  //     return;
  //   }

  //   if (hasCalculated) {
  //     // Reset the input and clear the calculated flag
  //     setInputCalculator("");
  //     setHasCalculated(false);
  //   }

  //   if (num === "=") {
  //     handleEqual();
  //     setHasCalculated(true);
  //   } else if (num === "C") {
  //     setInputCalculator("");
  //   } else if (num === "CE") {
  //     setInputCalculator(inputCalculator.slice(0, -1));
  //   } else {
  //     setInputCalculator(inputCalculator + num);
  //   }

  //   setLastInputCalculatorIsSymbol(isSymbol(num));
  // };

  // const handleEqual = () => {
  //   let value = inputCalculator;
  //   if (isSymbol(value[value.length - 1])) {
  //     value = value.slice(0, -1);
  //   }
  //   try {
  //     const sum = eval(value);
  //     setInputCalculator(sum.toString());
  //   } catch (error) {
  //     setInputCalculator("Error");
  //   }
  // };

  // const isSymbol = (inputCalculator) => {
  //   const symbols = ["+", "-", "*", "/"];
  //   return symbols.includes(inputCalculator);
  // };

  // // Event handler for calculator buttons
  // const handleCalculatorButtonClick = (e) => {
  //   const buttonValue = e.target.textContent;

  //   // Handle numeric buttons, operators, and special buttons
  //   if (buttonValue === "=") {
  //     handleEqual();
  //   } else if (buttonValue === "C") {
  //     setInputCalculator("");
  //   } else if (buttonValue === "CE") {
  //     setInputCalculator(inputCalculator.slice(0, -1));
  //   } else {
  //     handleInputCalculator(buttonValue);
  //   }

  //   // Update lastInputCalculatorIsSymbol flag
  //   setLastInputCalculatorIsSymbol(isSymbol(buttonValue));
  // };

  // Profile rightSidebar
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState({
    dropdown: false,
    sidebar: false,
  });

  const handleProfileSidebarCheckboxChange = () => {
    setIsProfileSidebarOpen((prevState) => ({
      ...prevState,
      sidebar: !prevState.sidebar,
      dropdown: false,
    }));
    setChatDropdownOpen(false);
    setNotificationDropdownOpen(false);
  };

  const handleProfileDropdownCheckboxChange = () => {
    setIsProfileSidebarOpen((prevState) => ({
      ...prevState,
      dropdown: !prevState.dropdown,
      sidebar: false,
    }));
  };
  const handleProfileSidebarClose = () => {
    setIsProfileSidebarOpen((prevState) => ({
      ...prevState,
      dropdown: false,
      sidebar: false,
    }));
  };
  // Countdown Timer
  const countdownDate = new Date(
    Date.now() + 365 * 24 * 60 * 60 * 1000
  ).getTime();
  const [isTimerState, setIsTimerState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setIsTimerState({ days: days, hours: hours, minutes, seconds });
    }
  };

  // useEffect(() => {
  //   const bodyElement = document.body;
  //   const divElement = document.querySelector(".body-padding");

  //   // Apply the correct theme classes on load
  //   if (!isLightTheme) {
  //     bodyElement.classList.remove("dark-theme");
  //     divElement.classList.remove("dark-theme");
  //     bodyElement.classList.add("light-theme");
  //     divElement.classList.add("light-theme");
  //   }
  // }, [isLightTheme]); // Depend on isLightTheme
  return (
    <DigiContext.Provider
      value={{
        isExpanded,
        toggleNav,
        isChatDropdownOpen,
        toggleChatDropdown,
        isNotificationDropdownOpen,
        toggleNotificationDropdown,
        isFullscreen,
        handleFullscreen,
        isLightTheme,
        handleLightThemeToggle,
        isDarkTheme,
        handleDarkThemeToggle,
        handleResetTheme,
        isSettingsOpen,
        handleSettingsToggle,
        containerRef,
        show,
        handleClose,
        handleShow,
        headerBtnOpen,
        handleHeaderBtn,
        handleHeaderReset,
        currentPage,
        dataPerPage,
        dataList,
        handleCheckboxChange,
        currentData,
        paginate,
        totalPages,
        pageNumbers,
        scrollbarPosition,
        updateScrollbarPosition,
        showAddNewTaskModal,
        handleCloseAddNewTaskModal,
        handleShowAddNewTaskModal,
        viewTaskModalOpen,
        handleViewTaskModalShow,
        handleViewTaskModalClose,
        state,
        toggleMainDropdown,
        toggleCrmDropdown,
        toggleHrmDropdown,
        toggleEcommerceDropdown,
        handleNavLinkClick,
        tableFilterBtnOpen,
        handleTableFilterBtn,
        handleTableFilterReset,
        searchInChat,
        handleSearchInChat,
        passwordVisible,
        togglePasswordVisibility,
        uploadModalOpen,
        handleUploadModalClose,
        handleUploadModalShow,
        newFolderModal,
        handleNewFolderModalClose,
        handleNewFolderModalOpen,
        fileDeatailsModalOpen,
        handleFileDetailsModalClose,
        handleFileDetailsModalShow,
        handleLayoutPosition,
        layoutPosition,
        title,
        handleTitleChange,
        permalink,
        handleEditPermalink,
        handleUpdatePermalink,
        handleCancelPermalink,
        currentEmailData,
        currentEmailPage,
        paginateEmail,
        emailPageNumbers,
        totalEmailPages,
        mailDetailsOpen,
        handleMailDetailsBtn,
        handleMailDetailClose,
        showMailModal,
        handleMailClose,
        handleMailShow,
        showComposeMail,
        handleComposeMailClose,
        handleComposeMailShow,
        handleBackgroundChange,
        resetBackground,
        backgroundImageStyle,
        handleSidebarBackgroundChange,
        resetSidebarBackground,
        sidebarBackgroundImageStyle,
        isNavExpanded,
        toggleNavExpanded,
        resetNavSize,
        setIsNavExpanded,
        themeSelection,
        handleThemeSelection,
        componentState,
        toggleComponentMainDropdown,
        toggleAdvance,
        toggleMultipleLevel,
        toggleFirstLevel,
        toggleSecondLevel,
        toggleSubComponentDropdown,
        pagesState,
        toggleMainPagesDropdown,
        toggleSubPagesDropdown,
        toggleAuthentication,
        toggleUser,
        dropdownOpen,
        handleDropdownClick,
        dashState,
        toggleMainDashDropdown,
        rightSideDropdown,
        handleRightSideDropdownToggle,
        primaryColor,
        handleColorSelectionToggle,
        INITIAL_EVENTS,
        handleDateSelect,
        renderEventContent,
        handleEventClick,
        handleEvents,
        currentEvents,
        addNewEventModal,
        handleAddNewModalHide,
        handleSaveEvent,
        calendarRef,
        selectedEvent,
        handleDeleteEvent,
        deleteConfirmationModal,
        handleCloseDeleteConfirmationModal,
        handleDelete,
        isSmallScreen,
        toggleSidebar,
        isSidebarOpen,
        setSidebarOpen,
        showVoiceCall,
        handleCloseVoiceCall,
        handleShowVoiceCall,
        showVideoCall,
        handleCloseVideoCall,
        handleShowVideoCall,
        ref,
        mobileHeaderBtn,
        handleMobileHeaderBtn,
        inputValue,
        handleInputChange,
        handleDateRangeSelection,
        showDatePicker,
        setShowDatePicker,
        selectedDateRange,
        handleDateRangeChange,
        mobileEmailBtn,
        handleMobileEmailBtn,
        mobileFileManagerBtn,
        handleMobileFileManagerBtn,
        smallDevice,
        isBelowLg,
        isRtl,
        handleRtlBtn,
        handleLtrBtn,
        headerRef,
        tableFilterRef,
        dateRangeSelectionRef,
        emailRef,
        fileManagerRef,
        mainAppsDropdownRef,
        mainComponentRef,
        mainPagesRef,
        isRechartHeight,
        mainDashboardRef,
        handleNavHover,
        handleNavHoverEnd,
        editorVisible,
        editorData,
        handleEditorDataChange,
        handleCalculator,
        calculatorShow,
        inputCalculator,
        calculatorRef,
        //handleCalculatorButtonClick,
        isProfileSidebarOpen,
        handleProfileSidebarClose,
        handleProfileSidebarCheckboxChange,
        handleProfileDropdownCheckboxChange,
        toggleError,
        toggleAdditional,
        isTimerState,
        setPrimaryColor,
      }}
    >
      {children}
    </DigiContext.Provider>
  );
};

export { DigiContext, DigiContextProvider };
