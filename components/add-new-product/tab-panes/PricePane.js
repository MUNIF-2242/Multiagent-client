import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
const PricePane = () => {
    const [joiningDate, setJoiningDate] = useState(null);
    const [leaveDate, setLeaveDate] = useState(null);
  return (
    <form>
        <div className="row g-3 mb-3">
            <label htmlFor="regularPrice" className="col-md-2 col-form-label col-form-label-sm">Regular Price ($)</label>
            <div className="col-md-10">
                <input type="number" className="form-control form-control-sm" id="regularPrice"/>
            </div>
        </div>
        <div className="row g-3 mb-3">
            <label htmlFor="salePrice" className="col-md-2 col-form-label col-form-label-sm">Discount ($)</label>
            <div className="col-md-8">
                <input type="number" className="form-control form-control-sm" id="salePrice"/>
            </div>
            <div className="col-md-2">
                <div className="form-control-sm p-0">
                    <select className="form-control form-control-sm">
                        <option value="1">Flat</option>
                        <option value="2">Discount</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="row g-3">
            <label htmlFor="PriceDateStart" className="col-md-2 col-form-label col-form-label-sm">Sale price dates</label>
            <div className="col-md-5">
                <Form.Control
                type="text"
                className="form-control form-control-sm date-picker"
                as={DatePicker}
                selected={joiningDate}
                onChange={date => setJoiningDate(date)}
                placeholderText="dd mmm, yy"
                />            
            </div>
            <div className="col-md-5">
                <Form.Control
                type="text"
                className="form-control form-control-sm date-picker"
                as={DatePicker}
                selected={leaveDate}
                onChange={date => setLeaveDate(date)}
                placeholderText="dd mmm, yy"
                />            
            </div>
        </div>
    </form>
  )
}

export default PricePane