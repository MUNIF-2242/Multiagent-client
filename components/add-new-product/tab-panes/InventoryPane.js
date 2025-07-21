import React from 'react'
import { Tooltip } from 'react-tooltip';
const InventoryPane = () => {
  return (
    <form>
        <div className="row align-items-center g-3 mb-3">
            <label className="col-md-2 col-form-label col-form-label-sm">
                SKU 
                <span 
                className="btn-flush fs-14" 
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Lorem Ipsum is simply dummy text."
                >
                    <i className="fa-solid fa-circle-question"></i>
                </span>
            </label>
            <div className="col-md-10">
                <input type="text" className="form-control form-control-sm" id="SKU"/>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label className="col-md-2 col-form-label col-form-label-sm">Manage Stock?</label>
            <div className="col-md-10">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="manageStock"/>
                    <label className="form-check-label" htmlFor="manageStock">
                        Manage stock level (quantity)
                    </label>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label className="col-md-2 col-form-label col-form-label-sm">
                Stock Status 
                <span 
                className="btn-flush fs-14" 
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Lorem Ipsum is simply dummy text."
                >                    
                <i className="fa-solid fa-circle-question"></i>
                </span>
            </label>
            <div className="col-md-10">
                <select className="form-control form-control-sm">
                    <option value="0">In stock</option>
                    <option value="1">Out of stock</option>
                    <option value="2">On backorder</option>
                </select>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label className="col-md-2 col-form-label col-form-label-sm">
                Sold individually 
                <span 
                className="btn-flush fs-14" 
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Lorem Ipsum is simply dummy text."
                >                    
                <i className="fa-solid fa-circle-question"></i>
                </span>
            </label>
            <div className="col-md-10">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="soldIndividually"/>
                    <label className="form-check-label" htmlFor="soldIndividually">
                        Limit purchases to 1 item per order
                    </label>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label className="col-md-2 col-form-label col-form-label-sm">
                Product Code 
                <span 
                className="btn-flush fs-14" 
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Lorem Ipsum is simply dummy text."
                >                    
                <i className="fa-solid fa-circle-question"></i>
                </span>
            </label>
            <div className="col-md-10">
                <input type="text" className="form-control form-control-sm" id="productCode"/>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="lowStockWarning" className="col-md-2 col-form-label col-form-label-sm">Low Stock Warning</label>
            <div className="col-md-10">
                <input type="number" className="form-control form-control-sm" id="lowStockWarning"/>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="showStockQuantity" className="col-md-2 col-8 col-form-label col-form-label-sm">Show Stock Quantity</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="showStockQuantity"/>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="showStockWithText" className="col-md-2 col-8 col-form-label col-form-label-sm">Show Stock With Text</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="showStockWithText"/>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3">
            <label htmlFor="hideStock" className="col-md-2 col-8 col-form-label col-form-label-sm">Hide Stock</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="hideStock"/>
                </div>
            </div>
        </div>
        <Tooltip id="my-tooltip" className='custom-tooltip'/>
    </form>
  )
}

export default InventoryPane