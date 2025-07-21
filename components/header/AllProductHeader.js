import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';
import Link from 'next/link'

const AllProductHeader = () => {
    const { headerBtnOpen, handleHeaderBtn, handleHeaderReset, headerRef } = useContext(DigiContext);

    const [checkboxes, setCheckboxes] = useState({
        showProducts: true,
        showPublished: true,
        showStock: true,
        showPrice: true,
        showSales: true,
        showRating: true,      
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
        <h2>All Products</h2>
        <div className="btn-box d-flex flex-wrap gap-2">
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
                        id="showProducts"
                        checked={checkboxes.showProducts}
                        onChange={handleChange}
                        /> 
                        <label className="form-check-label" htmlFor="showProduct">
                            Products
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-check">
                        <Form.Check
                        type="checkbox"
                        id="showPublished"
                        checked={checkboxes.showPublished}
                        onChange={handleChange}
                        /> 
                        <label className="form-check-label" htmlFor="showPublished">
                            Published
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-check">
                        <Form.Check
                        type="checkbox"
                        id="showStock"
                        checked={checkboxes.showStock}
                        onChange={handleChange}
                        /> 
                        <label className="form-check-label" htmlFor="showStock">
                            Stock
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
                        id="showSales"
                        checked={checkboxes.showSales}
                        onChange={handleChange}
                        /> 
                        <label className="form-check-label" htmlFor="showSales">
                            Sales
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-check">
                        <Form.Check
                        type="checkbox"
                        id="showRating"
                        checked={checkboxes.showRating}
                        onChange={handleChange}
                        /> 
                        <label className="form-check-label" htmlFor="showRating">
                            Rating
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
            <div className="btn-box">
                <Link href="/addNewProduct" className="btn btn-sm btn-primary"><i className="fa-light fa-plus"></i> Add New</Link>
            </div>
        </div>
    </div>
  )
}

export default AllProductHeader