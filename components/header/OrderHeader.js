import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';

const OrderHeader = () => {
    const { headerBtnOpen, handleHeaderBtn, handleHeaderReset, headerRef } = useContext(DigiContext);
    const [checkboxes, setCheckboxes] = useState({
        showOrderId: true,
        showCustomer: true,
        showStatus: true,
        showProduct: true,
        showPrice: true,
        showPaymentMethod: true,
        showDeliveryStatus: true,
        showOrderDate: true,
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
    <h2>All Order</h2>
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
                        id="showOrderId"
                        checked={checkboxes.showOrderId}
                        onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="showOrderId">
                            Order ID
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-check">
                        <Form.Check
                        type="checkbox"
                        id="showCustomer"
                        checked={checkboxes.showCustomer}
                        onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="showCustomer">
                            Customer
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
                        id="showProduct"
                        checked={checkboxes.showProduct}
                        onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="showProduct">
                            Product
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-check">
                        <Form.Check
                        type="checkbox"
                        id="showPrice"
                        checked={checkboxes.showPrice}
                        onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="showPrice">
                            Price
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-check">
                        <Form.Check
                        type="checkbox"
                        id="showPaymentMethod"
                        checked={checkboxes.showPaymentMethod}
                        onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="showPaymentMethod">
                            Payment Method
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-check">
                        <Form.Check
                        type="checkbox"
                        id="showDeliveryStatus"
                        checked={checkboxes.showDeliveryStatus}
                        onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="showDeliveryStatus">
                            Delivery Status
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-check">
                        <Form.Check
                        type="checkbox"
                        id="showOrderDate"
                        checked={checkboxes.showOrderDate}
                        onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="showOrderDate">
                            Order Date
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

export default OrderHeader