import React, { useContext, useState } from 'react';
import { DigiContext } from '../../context/DigiContext';
import { Form } from 'react-bootstrap';

const TaskHeader = () => {
    const {handleShowAddNewTaskModal, headerBtnOpen, handleHeaderBtn, handleHeaderReset, headerRef} = useContext(DigiContext)

  const [checkboxes, setCheckboxes] = useState({
    showName: true,
    showStatus: true,
    showStartDate: true,
    showDueDate: true,
    showAssignedTo: true,
    showPriority: true,
  });

  const handleChange = (e) => {
    const { id } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: !prevCheckboxes[id],
    }));
  };

  return (
    <div className="panel-header">
      <h2>Task Summary</h2>
      <div className="btn-box d-flex flex-wrap gap-2">
        <div id="tableSearch">
        <Form.Control type="text" placeholder="Search..." />
        </div>
        <button className="btn btn-sm btn-icon btn-outline-primary" onClick={handleHeaderReset}>
          <i className="fa-light fa-arrows-rotate"></i>
        </button>
        <div className="digi-dropdown dropdown" ref={headerRef}>
          <button
            className={`btn btn-sm btn-icon btn-outline-primary ${headerBtnOpen ? 'show' : ''}`}
            onClick={handleHeaderBtn}
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <i className="fa-regular fa-ellipsis-vertical"></i>
          </button>
          <ul className={`dropdown-menu ${headerBtnOpen ? 'show' : ''}`}>
            <li className="dropdown-title">Show Table Title</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showName"
                  checked={checkboxes.showName}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showName">
                  Name
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showStatus"
                  checked={checkboxes.showStatus}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showStatus">
                  Status
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showStartDate"
                  checked={checkboxes.showStartDate}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showStartDate">
                  Start Date
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showDueDate"
                  checked={checkboxes.showDueDate}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showDueDate">
                  Due Date
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showAssignedTo"
                  checked={checkboxes.showAssignedTo}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showAssignedTo">
                  Assigned To
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showPriority"
                  checked={checkboxes.showPriority}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showPriority">
                  Priority
                </label>
              </div>
            </li>
            <li className="dropdown-title pb-1">Showing</li>
            <li>
              <div className="input-group">
                <input type="number" className="form-control form-control-sm w-50" value="10" readOnly/>
                <button className="btn btn-sm btn-primary w-50">Apply</button>
              </div>
            </li>
          </ul>
        </div>
        <button className="btn btn-sm btn-primary" onClick={handleShowAddNewTaskModal} data-bs-toggle="modal" data-bs-target="#addTaskModal">
          <i className="fa-light fa-plus"></i> Add New
        </button>
      </div>
    </div>
  );
};

export default TaskHeader;
