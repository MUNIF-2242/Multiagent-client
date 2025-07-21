import React, { useContext, useEffect, useRef } from 'react';
import { DateRangePicker, DefinedRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DigiContext } from '../../context/DigiContext';

const DashboardBreadcrumb = ({ title }) => {
const {
  inputValue,
  handleInputChange,
  handleDateRangeSelection,
  showDatePicker,
  setShowDatePicker,
  selectedDateRange,
  handleDateRangeChange,
  smallDevice
} = useContext(DigiContext)
const ref = useRef(null);

// This function will be called when a click happens outside the component
const handleOutsideClick = (event) => {
  if (ref.current && !ref.current.contains(event.target)) {
    setShowDatePicker(false);
  }
};

// Use the useEffect hook to attach the event listener on component mount
useEffect(() => {
  document.addEventListener('click', handleOutsideClick);

  // Clean up the event listener on component unmount
  return () => {
    document.removeEventListener('click', handleOutsideClick);
  };
}, []);
  return (
    <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
      <h2>{title}</h2>
      <div className="input-group dashboard-filter" ref={ref}>
        <input
          type="text"
          className="form-control"
          name="basic"
          id="dashboardFilter"
          placeholder='11/15/2022 - 11/23/2022'
          value={inputValue}
          onChange={handleInputChange}
          style={{ pointerEvents: 'none' }}
        />
        <label htmlFor="dashboardFilter" className="input-group-text" onClick={handleDateRangeSelection}>
          <i className="fa-light fa-calendar-days"></i>
        </label> 
        {showDatePicker && (
        <div className="date-picker-container dashboard-date-picker">
        {smallDevice ? (
            <DefinedRange
              ranges={selectedDateRange}
              onChange={handleDateRangeChange}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              className="date-range-picker"
            />
          ) : (
            <DateRangePicker
              ranges={selectedDateRange}
              onChange={handleDateRangeChange}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              className="date-range-picker"
            />
          )}
        </div>
      )}
      </div>
     
    </div>
  );
};

export default DashboardBreadcrumb;
