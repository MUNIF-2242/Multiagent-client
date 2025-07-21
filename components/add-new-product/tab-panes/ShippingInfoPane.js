import React from 'react'
import { Tooltip } from 'react-tooltip';

const ShippingInfoPane = () => {
  return (
    <form>
        <div className="row g-3 mb-3">
            <label className="col-md-2 col-form-label col-form-label-sm">
                Weight (kg) 
                <span 
                className="btn-flush fs-14" 
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Lorem Ipsum is simply dummy text."
                >                    
                <i className="fa-solid fa-circle-question"></i>
                </span>
            </label>
            <div className="col-md-10">
                <input type="number" className="form-control form-control-sm" id="weight" placeholder="0"/>
            </div>
        </div>
        <div className="row g-3 mb-3">
            <label className="col-md-2 col-form-label col-form-label-sm">
                Dimensions (cm) 
                <span 
                className="btn-flush fs-14" 
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Lorem Ipsum is simply dummy text."
                >                    
                <i className="fa-solid fa-circle-question"></i>
                </span>
            </label>
            <div className="col-md-10">
                <div className="row g-3">
                    <div className="col-md-4">
                        <input type="number" className="form-control form-control-sm" id="Dimensions" placeholder="Length"/>
                    </div>
                    <div className="col-md-4">
                        <input type="number" className="form-control form-control-sm" placeholder="Width"/>
                    </div>
                    <div className="col-md-4">
                        <input type="number" className="form-control form-control-sm" placeholder="Height"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row g-3">
            <label className="col-md-2 col-form-label col-form-label-sm">
                Shipping className 
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
                    <option value="0">No Shipping className</option>
                </select>
            </div>
        </div>
        <Tooltip id="my-tooltip" className='custom-tooltip'/>
    </form>
  )
}

export default ShippingInfoPane