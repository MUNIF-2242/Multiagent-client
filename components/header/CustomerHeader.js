import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { DigiContext } from '../../context/DigiContext';

const CustomerHeader = () => {
    const { headerBtnOpen, handleHeaderBtn, handleHeaderReset,headerRef } = useContext(DigiContext);

    const [checkboxes, setCheckboxes] = useState({
        showAction: true,
        showCustomerId: true,
        showName: true,
        showPhone: true,
        showGroup: true,
        showCustomerType: true,
        showCreditLimit: true,
        showOpeningBalance: true,
        showDebit: true,
        showCredit: true,
        showClosingBalance: true,
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
        <h2>Customers</h2>
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
                            <Form.Check id="showAction" checked={checkboxes.showAction}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showAction">
                                Action
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showCustomerId" checked={checkboxes.showCustomerId}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showCustomerId">
                                Customer ID
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showName" checked={checkboxes.showName}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showName">
                                Name
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showPhone" checked={checkboxes.showPhone}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showPhone">
                                Phone
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showGroup" checked={checkboxes.showGroup}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showGroup">
                                Group
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showCustomerType" checked={checkboxes.showCustomerType}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showCustomerType">
                                Customer Type
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showCreditLimit" checked={checkboxes.showCreditLimit}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showCreditLimit">
                                Credit Limit
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showOpeningBalance" checked={checkboxes.showOpeningBalance}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showOpeningBalance">
                                Opening Balance
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showDebit" checked={checkboxes.showDebit}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showDebit">
                                Debit
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showCredit" checked={checkboxes.showCredit}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showCredit">
                                Credit
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showClosingBalance" checked={checkboxes.showClosingBalance}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showClosingBalance">
                                Closing Balance
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <Form.Check id="showStatus" checked={checkboxes.showStatus}
                            onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="showStatus">
                                Status
                            </label>
                        </div>
                    </li>
                    <li className="dropdown-title pb-1">Showing</li>
                    <li>
                        <div className="input-group">
                            <Form.Check type="number" className="form-control form-control-sm w-50" value="10" readOnly/>
                            <button className="btn btn-sm btn-primary w-50">Apply</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CustomerHeader