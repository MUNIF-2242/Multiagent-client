import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';

const AllCustomerHeader = () => {
    const { headerBtnOpen, handleHeaderBtn, handleHeaderReset, headerRef } = useContext(DigiContext);
    const [checkboxes, setCheckboxes] = useState({
        showName: true,
        showUserName: true,
        showLastActive: true,
        showDateRegistered: true,
        showEmail: true,
        showOrders: true,
        showTotalSpent: true,
        showAov: true,
        showCountry: true,
        showCity: true,
        showRegion: true,
        showPostalCode: true,       
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
        <h2>All Customer</h2>
        <div className="btn-box d-flex gap-2">
            <div id="tableSearch">
                <Form.Control type='text' placeholder='Seach...'/>
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
                            id="showUserName"
                            checked={checkboxes.showUserName}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showUsername">
                                Username
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showLastActive"
                            checked={checkboxes.showLastActive}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showLastActive">
                                Last Active
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showDateRegistered"
                            checked={checkboxes.showDateRegistered}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showDateRegistered">
                                Date Registered
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
                            id="showOrders"
                            checked={checkboxes.showOrders}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showOrders">
                                Orders
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showTotalSpent"
                            checked={checkboxes.showTotalSpent}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showTotalSpend">
                                Total Spend
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showAov"
                            checked={checkboxes.showAov}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showAOV">
                                AOV
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showCountry"
                            checked={checkboxes.showCountry}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showCountryRegion">
                                Country/Region
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showCity"
                            checked={checkboxes.showCity}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showCity">
                                City
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showRegion"
                            checked={checkboxes.showRegion}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showRegion">
                                Region
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check
                            type="checkbox"
                            id="showPostalCode"
                            checked={checkboxes.showPostalCode}
                            onChange={handleChange}
                            />                             
                            <label className="form-check-label" htmlFor="showPostalCode">
                                Postal Code
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

export default AllCustomerHeader