import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';

const AttendanceHeader = () => {
    const { headerBtnOpen, handleHeaderBtn, handleHeaderReset ,headerRef } = useContext(DigiContext);
    
    const [checkboxes, setCheckboxes] = useState({
        showDate: true,
        showName: true,
        showEmployeeID: true,
        showDivision: true,
        showCheckIn: true,
        showStatus: true,
        showShift: true,
        showAction: true,
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
        <h2>Attendance</h2>
        <div className="btn-box d-flex gap-2">
            <div id="tableSearch">
                <Form.Control type="text" placeholder="Search..." />
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
                            id="showDate"
                            checked={checkboxes.showDate}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showDate">
                                Date
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
                            id="showEmployeeID"
                            checked={checkboxes.showEmployeeID}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showEmployeeId">
                                Employee Id
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showDivision"
                            checked={checkboxes.showDivision}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showDivision">
                                Division
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showCheckIn"
                            checked={checkboxes.showCheckIn}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showChekinCheckout">
                                Chek In - Check Out
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
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showShift"
                            checked={checkboxes.showShift}
                            onChange={handleChange}
                            />                            
                            <label className="form-check-label" htmlFor="showShift">
                                Shift
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
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
  )
}

export default AttendanceHeader