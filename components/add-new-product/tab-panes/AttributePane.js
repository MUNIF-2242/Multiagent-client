import React, { useState } from 'react'

const AttributePane = () => {
    const [attributeFormBtn,setAttributeFormBtn] = useState(false)
    const handleAttributeFormBtn = () => {
        setAttributeFormBtn(!attributeFormBtn)
    }
  return (
    <div className="add-product-attribute">
        <div className="form-group">
            <select className="form-control form-control-sm">
                <option value="">Custom Product Attribute</option>
                <option value="">Brand</option>
                <option value="">Color</option>
                <option value="">Size</option>
            </select>
            <button className="btn btn-sm btn-icon btn-primary" id="addAttr" onClick={handleAttributeFormBtn}>
                <i className={`fa-light ${attributeFormBtn? 'fa-minus':'fa-plus'}`}></i>
            </button>
        </div>
        <div className={`form-group rounded border p-3 d-block mt-20 ${attributeFormBtn? '':'d-none'}`}>
            <div className="row g-3">
                <div className="col-md-4">
                    <input type="text" className="form-control form-control-sm mb-10" placeholder="Name"/>
                    <div className="form-check">
                        <label className="form-check-label p-0">
                            <input className="form-check-input me-2" type="checkbox" value=""/>
                            Visible on the product page
                        </label>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row g-0 g-lg-3 g-sm-1">
                        <div className="col-11 col-xs-10">
                            <textarea className="form-control" placeholder="Enter some text, or some attributes by '|' separating values."></textarea>
                        </div>
                        <div className="col-1 col-xs-2 d-flex justify-content-end">
                            <button className="btn btn-sm btn-icon btn-danger remove-option w-100" onClick={handleAttributeFormBtn}><i className="fa-light fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AttributePane