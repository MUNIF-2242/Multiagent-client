import React from 'react'

const ShippingConfigPane = () => {
  return (
    <form>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="estimateShippingTime" className="col-md-2 col-form-label col-form-label-sm">Estimate Shipping Time</label>
            <div className="col-md-10">
                <div className="input-group">
                    <input type="number" className="form-control form-control-sm" id="estimateShippingTime"/>
                    <span className="input-group-text">Days</span>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="freeShipping" className="col-md-2 col-8 col-form-label col-form-label-sm">Free Shipping</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="freeShipping"/>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="flatRate" className="col-md-2 col-8 col-form-label col-form-label-sm">Flat Rate</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flatRate"/>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3 mb-3">
            <label htmlFor="QuantityMulitiply" className="col-md-2 col-8 col-form-label col-form-label-sm">Quantity Mulitiply</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="QuantityMulitiply"/>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3">
            <label htmlFor="cashOnDelivery" className="col-md-2 col-8 col-form-label col-form-label-sm">Cash On Delivery</label>
            <div className="col-md-10 col-4">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="cashOnDelivery"/>
                </div>
            </div>
        </div>
    </form>
  )
}

export default ShippingConfigPane