import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import Link from 'next/link'
import { DigiContext } from '../../context/DigiContext';

const AllEmployeeHeader = () => {
    const { headerBtnOpen, handleHeaderBtn, handleHeaderReset,headerRef } = useContext(DigiContext);

    const [checkboxes, setCheckboxes] = useState({
        showEmployeeId: true,
        showPhoto: true,
        showName: true,
        showSection: true,
        showPhone: true,
        showPresentAddress: true,
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
        <h2>All Employee</h2>
        <div className="btn-box d-flex flex-wrap gap-2">
            <div id="tableSearch">
                <Form.Text placeholder='Search...'/>
            </div>
            <button className="btn btn-sm btn-icon btn-outline-primary" onClick={handleHeaderReset}><i className="fa-light fa-arrows-rotate"></i></button>
            <div className="digi-dropdown dropdown" ref={headerRef}>
                <button className={`btn btn-sm btn-icon btn-outline-primary ${headerBtnOpen? 'show':''}`} onClick={handleHeaderBtn} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="fa-regular fa-ellipsis-vertical"></i></button>
                <ul className={`digi-dropdown-menu dropdown-menu ${headerBtnOpen? 'show':''}`}>
                    <li className="dropdown-title">Show Table Title</li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showEmployeeId"
                            checked={checkboxes.showEmployeeId}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showEmployeeId">
                                Employee ID
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showPhoto"
                            checked={checkboxes.showPhoto}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showPhoto">
                                Photo
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
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
                            <Form.Check
                            type="checkbox"
                            id="showSection"
                            checked={checkboxes.showSection}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showSection">
                                Section
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
                            id="showPresentAddress"
                            checked={checkboxes.showPresentAddress}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showPresentAddress">
                                Present Address
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
            <Link href="/addEmployee" className="btn btn-sm btn-primary"><i className="fa-light fa-plus"></i> Add New</Link>
        </div>
    </div>
  )
}

export default AllEmployeeHeader