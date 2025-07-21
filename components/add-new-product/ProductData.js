import React, { useState } from 'react'
import ProductDataTab from './ProductDataTab'

const ProductData = () => {
    const [productDataBtn,SetProductDataBtn] = useState(false)

    const handleProductDataBtn = () => {
        SetProductDataBtn(!productDataBtn)
    }
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <h5>Product Data</h5>
            <div className="panel-header-right">
                <div className="form-check d-flex gap-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="generalProductData"/>
                        <label className="form-check-label" htmlFor="generalProductData">
                            General
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="DownloadableProductData"/>
                        <label className="form-check-label" htmlFor="DownloadableProductData">
                            Downloadable
                        </label>
                    </div>
                </div>
            </div>
            <div className="btn-box d-flex gap-2">
                <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                <button className="btn btn-sm btn-icon btn-outline-primary panel-close" onClick={handleProductDataBtn}><i className="fa-light fa-angle-up"></i></button>
            </div>
        </div>
        <div className={`panel-body ${productDataBtn? 'd-none':''}`}>
           <ProductDataTab/>
        </div>
    </div>
  )
}

export default ProductData