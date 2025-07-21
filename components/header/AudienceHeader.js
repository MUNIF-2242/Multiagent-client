import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';

const AudienceHeader = () => {
  const { headerBtnOpen, handleHeaderBtn, handleHeaderReset,headerRef } = useContext(DigiContext);
  const [checkboxes, setCheckboxes] = useState({
    showFirstName: true,
    showLastName: true,
    showEmail: true,
    showCompany: true,
    showPhone: true,
    showPosition: true,
    showLastLogin: true,
    showStatus: true,
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
      <h2>Target Audience</h2>
      <div className="btn-box d-flex gap-2">
        <div id="tableSearch">
          <Form.Control type="text" placeholder="Search..."/>
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
          <ul className={`digi-dropdown-menu dropdown-menu ${headerBtnOpen ? 'show' : ''}`}>
            <li className="dropdown-title">Show Table Title</li>
            <li>
              <div className="form-check">
                <Form.Check
                  type="checkbox"
                  id="showFirstName"
                  checked={checkboxes.showFirstName}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showFirstName">
                  First Name
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <Form.Check
                  type="checkbox"
                  id="showLastName"
                  checked={checkboxes.showLastName}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showLastName">
                  Last Name
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <Form.Check
                  type="checkbox"
                  id="showEmail"
                  checked={checkboxes.showEmail}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showEmail">
                  Email
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <Form.Check
                  type="checkbox"
                  id="showCompany"
                  checked={checkboxes.showCompany}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showCompany">
                  Company
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <Form.Check
                  type="checkbox"
                  id="showPhone"
                  checked={checkboxes.showPhone}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showPhone">
                  Phone
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <Form.Check
                  type="checkbox"
                  id="showPosition"
                  checked={checkboxes.showPosition}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showPosition">
                  Position
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <Form.Check
                  type="checkbox"
                  id="showLastLogin"
                  checked={checkboxes.showLastLogin}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showLastLogin">
                  Last Login
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <Form.Check
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
            <li className="dropdown-title pb-1">Showing</li>
            <li>
              <div className="input-group">
                <input type="number" className="form-control form-control-sm w-50" value="10" readOnly/>
                <button className="btn btn-sm btn-primary w-50">Apply</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AudienceHeader;
