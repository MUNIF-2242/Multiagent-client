import React, { useContext, useState } from 'react';
import { DigiContext } from '../../context/DigiContext';
import { Form } from 'react-bootstrap';

const CompanyHeader = () => {
  const { headerBtnOpen, handleHeaderBtn, handleHeaderReset, headerRef } = useContext(DigiContext);
  const [checkboxes, setCheckboxes] = useState({
    showCompany: true,
    showAddress: true,
    showEmail: true,
    showPhone: true,
    showContactPerson: true,
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
      <h2>Companies</h2>
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
          <ul className={`digi-dropdown-menu dropdown-menu  ${headerBtnOpen ? 'show' : ''}`}>
            <li className="dropdown-title">Show Table Title</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
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
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showAddress"
                  checked={checkboxes.showAddress}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showAddress">
                  Address
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
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
                <input
                  className="form-check-input"
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
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showContactPerson"
                  checked={checkboxes.showContactPerson}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showContactPerson">
                  Contact Person
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

export default CompanyHeader;
