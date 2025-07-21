import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';

const LeadsHeader = () => {
  const { headerBtnOpen, handleHeaderBtn, handleHeaderReset,headerRef } = useContext(DigiContext);

  const [checkboxes, setCheckboxes] = useState({
    showAction: true,
    showName: true,
    showAddress: true,
    showPhone: true,
    showEmail: true,
    showCompany: true,
    showDescription: true,
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
      <h2>Leads</h2>
      <div className="btn-box d-flex gap-2">
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
          <ul className={`digi-dropdown-menu dropdown-menu ${headerBtnOpen ? 'show' : ''}`}>
            <li className="dropdown-title">Show Table Title</li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showAction"
                  checked={checkboxes.showAction}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showAction">
                  Action
                </label>
              </div>
            </li>
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
                  id="showDescription"
                  checked={checkboxes.showDescription}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showDescription">
                  Description
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

export default LeadsHeader;
